const express=require("express");
const app=express();
const userModel=require("./prac2user");
const mongoose=require("mongoose");
const cors=require("cors");

app.use(express.json());
app.use(cors());    // Cross Resource Origin Sharing

// MongoDB connection

mongoose.connect("mongodb+srv://SHUBZ:shubz@cluster0.z0lvq.mongodb.net/I_sea?retryWrites=true&w=majority");

// for getUsers route
// app.get("/route",(req,res)=>{});

app.get("/getUsers",(req,res)=>{
    // getUser cha route aahe means kahi tri pahije so .. kahi tri pahije means sodhne .. ani sodne means .. model madhe sodhane
    userModel.find({},
        (err,result)=>{
            if(err)
            {
                res.json(err);
            }
            
            else
            {
                res.json(result);
            }
    });
});

// // for createUser route

// app.post("/createUser",async(req,res)=>{
//     const user=req.body;
//     const newUser=new userModel(user);
//     await newUser.save();

//     res.json(user);
// });



// Port number and callback function
app.listen(3001,()=>{
    console.log("Running Successfully!!");
});


// app.get("/getUsers",(req,res)=>{
//     // getUser cha route aahe means kahi tri pahije so .. kahi tri pahije means sodhne .. ani sodne means .. model madhe sodhane
//     userModel.find({},  // for retrieve everything we used {} it empty it works like *.
//         (err,result)=>{
//             if(err)
//             {
//                 res.json(err);      // we need to send something in json so we need to do that.
//             }
//             else
//             {
//                 res.json(result);
//             }
//         });
// });

/*1*/
// app.post("/createuser",async(req,res)=>{
//     const user=req.body;
//     const newUser=new userModel(user);
//     await newUser.save();

//     res.json(user);
// });

/*2*/

// app.post("/route",async(req,res)=>{
//     const user=req.body;
//     const newUser=new userModel(user);  // turning into schema like may be
//     await newUser.save();

//     res.json(user);     // in response we are sending user.
// });

