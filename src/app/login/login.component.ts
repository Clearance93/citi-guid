import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Registration } from '../model/registration';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reg: Registration = new Registration();
  users: Array<Registration> = [];

  constructor(private _htppClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
    this._htppClient.get<Registration[]>(`http://localhost:3000/registration`).subscribe(data => {
      this.users = data;
      console.log(data);
    }, 
    err => {
      console.error(err);
    });
  }

  login(){
    if(this.isUserExist()) {
      localStorage.setItem('isLoggedIn', "true")
      this._router.navigate(['/dashboard'])
    }
    else{
      alert("Login failed")
    }
  }

  isUserExist(){
    for(const reg of this.users)
    if(reg.Username == this.reg.Username && reg.password == this.reg.password){
      return true;
    }
    return false;
  }
 
}
