import { HttpClient } from '@angular/common/http';
import {  base_url } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  testLoginRedirect(route : Router){
    if(!this.testLogin())
      route.navigateByUrl("/login");
  }

  testLogin(){
    let token = localStorage.getItem("token");
    if(token == null)
      return false;
    if(token == "")
      return false;
    return true;
    // return this.testLoginBase(user.token);
  }

  // testLoginBase(token : string){
  //   return true;
  // }

  getFormData(email: string, mdp: string){
    let rep = new FormData();
    rep.append("email", email);
    rep.append("mdp", mdp);
    return rep; 
  }

  login(email: string, mdp: string){
    let url = base_url + "admin/login";
    var reqHeader = ({
      'Authorization' : 'Bearer 0'
    });
    // let formData = this.getFormData(email, mdp);
    let data = {"email":email,"password":mdp};
    // return this.http.post(url,data,{headers:reqHeader});
    return this.http.post(url,data);
  }

  setToken(token : string){
    localStorage.setItem("token", token);
  }


  logout(): void {
    localStorage.clear();
  }
  
}
