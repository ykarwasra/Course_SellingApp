import jwt from "jsonwebtoken";

export const SECRET="SEC@ret";

export const authenticateJwt=(req,res,next)=>{
    const authheader=req.headers.authorization;

    if(authheader){
        const token = authheader.split(' ')[1];
        jwt.verify(token,SECRET,(err,user)=>{
            if (err) return res.Status(403).send(err);

            else{
                req.user=user;
                next();
            }
        })     
    }
        else{
            res.status(403).send({"error":"No Token Provided!"})
        }
}

