const UserModel = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function registerUser(req , res)
{
    try{
        const {fullname , email , password , password2} = req.body;
        let errors = [];

        let find = await UserModel.find({email});
        if(find.length > 0)
        {
            errors.push({msg: 'this username/email has been used'});
            return res.json({
                msg: 'this username/email has been used',
                status: 401
            })
        }
        else{
            //Check required fields
            if(!fullname || !email || !password || !password2)
            {
                errors.push({msg: 'Please complete the required items'});
                return res.json({
                    status: 406,
                    msg: 'Please complete the required items'
                });
            }

            //Check password match
            if(password !== password2)
            {
                errors.push({msg: 'Passwords do not match'});
                return res.json({
                    msg: 'Passwords do not match',
                    status: 406
                });
            }

            //Check passwords length
            if(password.length < 8)
            {
                errors.push({msg: 'Passwords should be at least 6 characters'})
                return res.json({
                    msg: 'Passwords should be at least 6 characters',
                    status: 406
                })
            }

            if(errors.length > 0) return null
            else{
                let hashPass = await bcrypt.hash(password , 10);
                const User = await UserModel({
                    fullname,
                    email,
                    password: hashPass
                });
    
                await User.save()
                .then(() => res.json({status: 201}))
                .catch(() => res.json({status: 503}));
            }
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
            if(findByEmail)
            {
                let decoding = await bcrypt.compare(password , findByEmail.password);
                if(!decoding)
                {
                    return res.json({
                        msg: 'Passwords do not match',
                        status: 406
                    });
                }
                
                let token = await jwt.sign({data: findByEmail} , process.env.ACCESS_TOKEN_SECRET);
                res.json({
                    token,
                    status: 200
                });
            }
            else{
                res.json({
                    msg: 'This user not fund please sign up',
                    status: 404
                });
            }
        }
    }catch(err)
    {
        res.json({msg: err , status: 500});
    }
}

async function logoutUser(req , res)
{
    try{
        let {token} = req.body;

        //Check
        if(!token)
        {
            return res.json({
                msg: 'Please complete the required item',
                status: 406
            })
        }

        let decode = await jwt.decode(token , {complete: true});
        //Token validation 
        if(decode === null)
        {
            return res.json({
                msg: 'Invalid token!',
                status: 406
            });
        }
        res.json({
            status: 200
        });
    }
    catch(err){
        res.json({msg: err , status: 500});
    }
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser
}