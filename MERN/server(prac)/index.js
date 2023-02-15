const express=require("express");
const app=express();
const mongoose=require("mongoose");
const userModel=require("./users");
const cors=require("cors");

// you may forget this
app.use(express.json());
app.use(cors());

// Database connectivity
mongoose.connect("database link password and collection name integreted");

/* "/getUsers" route =>to get info from databse */
app.get("/getUsers",(req,res)=>{         // error may occur FIRST we write **req** then **res** as it is request and response
    userModel.find({},  // we can specify particular in this if we want something in particular.
        (err,result)=>{
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(result);
            }
        }    
    )
});

/* "/createUser" route =>to get info from databse */

app.post("createUser",async(req,res)=>{
    const user=req.body;
    const newUser=new userModel(user);
    await newUser.save();

    res.json(user);
});


app.listen(3001,()=>{
    console.log("Its Working!!");
});






// practise

// app.post("/createUser",async(req,res)=>{
//     const user=req.body;

//     const newUser=new userModel(user);  // user is what we get from req.body
//     await newUser.save();
    
//     res.json(user);
// });

// const express=require("express");
// const app=express();
// const mongoose=require("mongoose");

// const userModel=require("./users");

// app.get()

// // app.listen(portNo.,callback function);
// // Used port 3001 because 3000 is taken by our react.
// app.listen(3001,()=>{
//     console.log("Our Server is Running!!");
// });

// const appy=express();

// appy.get("/getUser",(req,res)=>{
//         userModel.find({},
//             (err,result)=>{
//                 if(err)
//                 {
//                     res.json(err);
//                 }
//                 else
//                 {
//                     res.json(result);
//                 }
//         });
// });

/*** FOR getUsers ROUTE ***/
// app.get("route",callback function)
// app.get("/getUsers",(req,res)=>{
//     userModel.find({},          // finds {} means we want to retrieve all info from data.We aren't trying to get particular info. 
//     (err,result)=>{
//         if(err){
//             res.json(err);
//         }
//         else{
//             res.json(result);
//         }
//     }     
//     );
// });

