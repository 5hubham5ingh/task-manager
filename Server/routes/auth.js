import { Router } from "express";
import { logIn, register } from "../controllers/auth.js";

export const authRoutes = Router();

authRoutes.post('/logIn',logIn);

authRoutes.post('/signUp',register);