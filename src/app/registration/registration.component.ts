import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from '../model/registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  reg: Registration = new Registration();
  users: Array<Registration> = [];

  constructor(private _httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
  }


  registration(){
      this._httpClient.post(`http://localhost:3000/registration`, this.reg).subscribe(data => {
      console.log(data);
      this._router.navigate(['./login'])
    }, err => {
      console.error(err);
    })
  }
}
