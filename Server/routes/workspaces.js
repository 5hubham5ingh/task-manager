import { Router } from "express";
import { createWorkspace, deleteWorkSpace, getParticipantsList, getUsersWorkSpaces } from "../controllers/workspaces.js";

export const workspacesRoutes = Router();


// Get all user names and id
workspacesRoutes.get('/participants', getParticipantsList);

// get all the workspaces of the user
workspacesRoutes.get('/:userId',getUsersWorkSpaces);

// Create new work space
workspacesRoutes.post('/:userId',createWorkspace); 

// Delete work space
workspacesRoutes.delete('/:userId/:workspaceId',deleteWorkSpace); 