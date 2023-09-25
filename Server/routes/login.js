import { Router, request, response } from "express";
import { User } from "../Models/user.js";

export const logInRouter = Router();

logInRouter.get('/',(request,response)=>{
    try{
        const {userName, password} = request.body;
        if(!userName || !password)
        response.send(400).send({ message: 'user name or password missing'});

        const userCredentials = User.find({userName,password});

        if(!userCredentials) response.status(404).send({message: "user not found"});

        else response.status(200).json(userCredentials._id);
    }
    catch(error){
        console.log("Error while logging in.", error)
    }
})