import { Router } from "express";
import { createWorkspace, deleteWorkSpace, getParticipantsList, getUsersWorkSpaces } from "../controllers/user.js";

export const userRoutes = Router();


// Get all user names and id
userRoutes.get('/participants', getParticipantsList);

// get all the workspaces of the user
userRoutes.get('/:userId',getUsersWorkSpaces);

// Create new work space
userRoutes.post('/:userId',createWorkspace); 

// Delete work space
userRoutes.delete('/:userId/:workspaceId',deleteWorkSpace); 