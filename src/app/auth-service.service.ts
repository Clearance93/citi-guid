import { Injectable } from '@angular/core';
import { Customers } from './model/customers';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  customer: Customers [] = [];

  constructor() { }
}
