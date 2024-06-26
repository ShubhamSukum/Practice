import express from "express";

const app=express();

app.use(express.json());

app.get("/",(req,res)=>res.json("Docker Server is up !!"));

app.listen(3001,()=>{
    console.log("Server running!!");
})