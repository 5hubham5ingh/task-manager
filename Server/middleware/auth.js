import jwt from "jsonwebtoken";

export const verifyToken = async (request,response,next)=>{
    try{

        let token = request.header("Authorization");

        if(!token) return response.status(403).send("Auth key missing. Access denied.");

        const verified = jwt.verify(token, process.env.JWT_KEY);
        request.user = verified;
        next();
    }catch(error){
        console.log("Error while verifying jwt token", error.message);

        response.status(500).json({error})
    }
}