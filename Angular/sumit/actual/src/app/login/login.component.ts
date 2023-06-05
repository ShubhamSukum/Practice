import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logInSubmit(username:String,password:String){
    fetch("http://localhost:3000/user").then(res=>{
      return res.json()
    })
    .then(res=>{
      const userD:any=res.find((value:any)=>{
        return value.username==username && value.password==password;        
      })

      if(userD){
        alert("Logged in as "+userD.username);
        localStorage.setItem("LoggedIn",JSON.stringify(userD));
        window.location.href="/profile";
      }
      
    })
    .catch((err)=>{
      alert("Error occured"+err);
      console.error(err);
    })

    return false;
  }
}
