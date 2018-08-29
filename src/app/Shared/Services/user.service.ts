import { Injectable } from '@angular/core';
import {HttpClient  } from '@angular/common/http'
import { HttpModule } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  saveUser(newUser) {
    return  this.http.post("http://localhost:3500/api/user",newUser);
 }
}
