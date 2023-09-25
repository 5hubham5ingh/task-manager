import { Router } from "express";
import { User } from "../Models/user.js";

export const signUpRouter = Router();

signUpRouter.post('/signUp',async(request,response)=>{
    try{
        const {userName, password} = request.body; 
        if(!userName || !password) response.status(400).send({message: 'User name or password missing'});

        const newUser = {userName,password};

        const result = await User.create(newUser);

        //send list of workplaces
        response.status(200).send('success');
    }catch(error) {
        console.log('Error while signing up', error)
    }
})