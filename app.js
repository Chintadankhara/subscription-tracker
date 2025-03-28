import express from "express";
import cookieParser from "cookie-parser";
import {PORT} from './config/env.js'

import authRouter from './routes/auth.routes.js'
import userRouter from "./routes/user.Routes.js";
import subscriptionRouter from './routes/subscription.routes.js'
import connecToDatabase from './database/mongodb.js'
import errorMiddleware from './Middlewares/error.middleware.js'
import arcjetMiddleware from "./Middlewares/arcjet.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser())

app.use(arcjetMiddleware)
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRouter)
app.use('/api/v1/subscriptions',subscriptionRouter);


app.get("/",(req, res)=>{
    res.send("Welcome to subscription API")
});
app.use("*",(req, res)=>{
    res.send("Requested URI not found, bad request 404 !");
})

app.use(errorMiddleware)

app.listen(PORT,async ()=>{
    console.log(`Subscription Tracker API is runnig on http://localhost:${PORT}`);
    await connecToDatabase();
    
})

export default app;