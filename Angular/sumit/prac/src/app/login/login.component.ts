import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  submitLogin(username:String,password:String){
    
    fetch("http://localhost:3000/users")
    .then(res=>res.json())
    .then(res=>{
      const user:any=res.find((user:any)=>{
        return user.username==username && user.password==password;
      })

      console.log(user);

      if(user){
        alert("Login Successfull :)");
        localStorage.setItem("user",JSON.stringify(user));
        window.location.href="/profile";
      }else{
        alert("Failed to Log In!! Try Again!!");
      }
    })
    .catch(err=>{
      console.error(err);
      confirm("Error Occured!!");
    })

    return false;
  }
}
