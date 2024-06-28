import express from "express";
import dotenv from "dotenv";

const app=express();

dotenv.config();
const shubz = process.env.shubz;

app.use(express.json());

app.get("/",(req,res)=>res.json("Docker Server is up !!"+shubz));

app.listen(3001,()=>{
    console.log("Server running!!"+shubz);
})