import express from "express";
const router = express.Router();

let logging =(req,res,next)=>{
    console.log("this is middleware")
    console.log(req.url)
    next()
}

router.use(logging)

router.get("/",(req,res)=>{
    res.json("server is running")
 })

 router.get("/users",(req,res)=>{
    res.send("user route")
})


export default router;