import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:8081';
  constructor(private http:HttpClient) { }

  //add user
  public adduser(user :any){
    return this.http.post(this.baseUrl +'/user/', user);
  }
}
