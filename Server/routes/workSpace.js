import { Router } from "express";
import {addTask, deleteTask, sendTaskList, updateTask} from "../controllers/workspace.js"

export const workSpaceRoutes = Router(); 

// open one work space / task manager
workSpaceRoutes.get("/:workspaceId", sendTaskList);

// Create new task
workSpaceRoutes.post("/:workspaceId", addTask); 

// Update task
workSpaceRoutes.patch("/:workspaceId/:taskId", updateTask);

//delete task
workSpaceRoutes.delete("/:workspaceId/:taskId", deleteTask);


