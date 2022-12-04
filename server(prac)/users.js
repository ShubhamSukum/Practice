const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:
    {
        type:String,
        required:true,
    },

    age:
    {
        type:Number,
        required: true,
    },

    username:
    {
        type:String,
        required:true,
    },
});
// const g=mongoose.model("collection name *mongoDB compass*",Schema for this model which we coded above);
const userModel=mongoose.model("users",userSchema);
module.exports=userModel;



/******************************************************* PRAC
const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:
    {
        type:String,
        required:true,
    },

    age:
    {
        type:Number,
        required:true,
    },

    username:
    {
        type:String,
        required:true,
    },
});

const userModel=mongoose.model("users",userSchema);

module.exports=userModel;

*******************************************************************/
