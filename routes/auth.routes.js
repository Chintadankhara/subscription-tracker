import { Router } from "express"; 
import { isAuthenticated, signIn,signUp } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post('/sign-in',signIn)
authRouter.post('/sign-up',signUp)
authRouter.post('/token-check',isAuthenticated)

export default authRouter;