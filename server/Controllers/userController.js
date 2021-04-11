const UserModel = require('../Models/UserModel');
const jwt = require('jsonwebtoken');

async function registerUser(req , res)
{
    try{
        const {fullname , email , password} = req.body;
        if(!fullname || !email || !password)
        {
            return res.json({
                status: 406,
                msg: 'Please complete the required items'
            });
        }
        else
        {
            const User = await UserModel({
                fullname,
                email,
                password
            });

            await User.save()
            .then(() => res.json({status: 201}))
            .catch(() => res.json({status: 503}));
        }
    }catch(err)
    {
        res.json({msg: err , status: 500});
    }
}

async function loginUser(req , res)
{
    try{
        let {email , password} = req.body;
        if(!email || !password)
        {
            return res.json({
                status: 406,
                msg: 'Please complete the required items'
            });
        }
        else
        {
            let findByEmail = await UserModel.findOne({email});
            let findByPassword = await UserModel.findOne({password});
            if(findByEmail && !findByPassword)
            {
                return res.json({
                    msg: 'Wrong password please enter again',
                    status: 406
                })
            }        
            if(!findByEmail)
            { 
                return res.json({
                    status: 404,
                    msg: 'This user not fund please sign up'
                });
            }
            let token = jwt.sign({data: findByEmail} , process.env.ACCESS_TOKEN_SECRET);
            res.json({
                data: token,
                status: 200
            });
        }
    }catch(err)
    {
        res.json({msg: err , status: 500});
    }
}

module.exports = {
    registerUser,
    loginUser
}