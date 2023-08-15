import { useState } from "react";
import {auth,googleProvider} from "../config/firebase";
import {createUserWithEmailAndPassword,signInWithPopup} from "firebase/auth";

export const Auth= ()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    // console.log(auth?.currentUser?.email);

    const SignIN=async()=>{
        try{
            await createUserWithEmailAndPassword(auth,email,password);
        }catch(err){
            console.error(err);
        }
    };

    const signInWithGoogle=async()=>{
        try{
            await signInWithPopup(auth,googleProvider);
        }catch(err){
            console.error(err);
        }
        
    };

    return <div>
        <div>
            <input 
                placeholder="Name" type="text"
                onChange={(e)=>setEmail(e.target.value)}/>
            <br/>
            <input placeholder="Password" type="password"
                onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <div>
            <br/>
            <button onClick={SignIN}> Sign In</button>
        </div>

        {/* Google */}

        <button onClick={signInWithGoogle}>Sign In with Google</button>

        {/* Google */}
        
    </div>
} 