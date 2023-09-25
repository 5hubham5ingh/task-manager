import { Router } from "express";

export const workSpaceRoute = Router();

workSpaceRoute.post('/',createWorkSpace);

workSpaceRoute.post('/:id', createTask);

workSpaceRoute.delete('/')

workSpaceRoute.get('/',getListOfAllWorkSpaces);

workSpaceRoute.get('/:id',openOneWorkSpace);


function getListOfAllWorkSpaces(request,response){
    try{

    }
    catch(error){
        console.log('Error in getting list of all work spaces',error)
    }
}

function openOneWorkSpace(request,response){
    try{

    }
    catch(error){
        console.log("Error in opening one work space.", error)
    }
}