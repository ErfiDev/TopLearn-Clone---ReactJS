const UserModel = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {registerValidation,loginValidation} = require('../validations/UserValidation');


async function registerUser(req , res)
{
    let errors = [];
    //Validation
    let {error} = registerValidation(req.body); 
    if(error)
    {
        let {details} = error;
        details.forEach(item => errors.push(item.message));
        return res.json({status: 406 , msg: errors});
    }

    const {fullname , email , password , password2} = req.body;

    //Checking if the user is already in the database
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
        //Check password match
        if(password !== password2)
        {
            errors.push({msg: 'Passwords do not match'});
            return res.json({
                msg: 'Passwords do not match',
                status: 406
            });
        }

        if(errors.length > 0) return null
        else{
            try{
                let hashPass = await bcrypt.hash(password , 10);
                const User = new UserModel({
                    fullname,
                    email,
                    password: hashPass
                });

                await User.save()
                .then(() => res.json({status: 201}))
                .catch(() => res.json({status: 503}));
            }
            catch(err){res.json({msg: err , status: 500})};
        }
    }
}

async function loginUser(req , res)
{
    let errors = [];
    //Validation
    let {error} = loginValidation(req.body);
    if(error)
    {
        let {details} = error;
        details.forEach(item => errors.push(item.message));
        return res.json({status: 406 , msg: errors});
    }

    let {email , password} = req.body;
    //Checking User with email
    let findByEmail = await UserModel.findOne({email});
    if(findByEmail)
    {
        //Compare
        let ComparingPass = await bcrypt.compare(password , findByEmail.password);
        if(!ComparingPass)
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
            status: 200,
            msg: `goodbye ${decode.payload.data.fullname}`
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