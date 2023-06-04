import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user:any
  constructor(){
    const userD:any=localStorage.getItem("user")

    if(userD){
      this.user=JSON.parse(userD)
    }else{
      window.location.href="/"
    }
  }
}
