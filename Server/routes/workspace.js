import { Router } from "express";
import {addTask, deleteTask, sendTaskList, updateTask} from "../controllers/workspace.js"

export const workspaceRoutes = Router(); 

// open one work space / task manager
workspaceRoutes.get("/:workspaceId", sendTaskList);

// Create new task
workspaceRoutes.post("/:workspaceId", addTask); 

// Update task
workspaceRoutes.patch("/:workspaceId/:taskId", updateTask);

//delete task
workspaceRoutes.delete("/:workspaceId/:taskId", deleteTask);


