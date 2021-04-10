import jwt from 'jsonwebtoken';


const decoder = (token)=>{
    return jwt.decode(token , {complete: true});
}

export default decoder;