import jwt from 'jsonwebtoken'
const middelWare=(req,res,next)=>{
    let token;
    let authHeader=req.headers.Authorization  || req.headers.authorization;
    token=authHeader.split(" ")[1];
    jwt.verify(token,process.env.SCRET_CODE,(err,result)=>{
        if(err){
            res.status(400).json({message: err.message})
        }
        console.log("successfuly");
        next()
    })
}

export default middelWare