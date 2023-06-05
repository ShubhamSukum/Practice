import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpSubmit(username:String,password:String){
    fetch("http://localhost:3000/user",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({username,password})
    })
    .then((res)=>{
      res.json();
      if(confirm("Want to log In?")) location.href="/";
    })
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.error(err);
      confirm("Error Occured!!");
    })

    return false;
  }
}
