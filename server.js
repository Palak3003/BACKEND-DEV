import express from "express";
import userRoute from "./router/userRouter.js";
import registration from "./router/resgistrationRoute.js";
import dashboard from "./router/dashboardRoute.js";

const port =3000;
const app =  express();


app.use("/api", userRoute)
app.use("/register", registration)
app.use("/profile", dashboard)

app.listen(port,()=>{
    console.log("server is running on port" +port)
})