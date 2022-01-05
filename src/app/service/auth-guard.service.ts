import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _httpClient: HttpClient) { }

  canActivate(): boolean {
    if(this.isLoggedIn()){
      return true
    }
    return false;
  }

  isLoggedIn(): boolean{
    if(localStorage.getItem('isLoggedIn') == "true") {
      return true;
    }
    return false;
  }

  loggedout(){
    localStorage.removeItem('isLoggedIn');
  }
}
