const mongoose=require("mongoose");

const userSchema=new mongoose.Schema(
    {
        name:
        {
            type: String,
            required: true,
        },

        age:
        {
            type: String,
            required: true,
        },

        username:
        {
            type: String,
            required: true,
        },
    }
);

const userModel=mongoose.Model("collection_name",userSchema); // collection name and Schema we created earlier
module.exports=userModel;