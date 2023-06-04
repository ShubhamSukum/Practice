import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpSubmit(username:String,password:String){

    fetch("http://localhost:3000/users",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({username,password})
    })
    .then((res)=>{
      res.json();
    })
    .then((res)=>{
      console.log(res);
      alert("User Registered!!")
      // to locate to login when we register successfully
      window.location.href="/";
    })
    .catch((err)=>{
      console.log(err);
      alert("Failed to Register!!");
      confirm("Confirm alert!!");
    })

    return false;   // angular's version => "event.preventDefault()"
  } 
}
