import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataFromService:any="";
  email = "";
  mdp = "";
  errorMsg = "";
  constructor(
    private loginServ : LoginService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    const onSuccess = response => {
      if(response.status == 200){
        this.loginServ.setToken(response.data.token);
        this.route.navigateByUrl("/accueil");
      }
      else{
        this.errorMsg = response.message; 
      }
    }
  
    const onError = response => {
      this.errorMsg = "Erreur : "+response.error.message;  
    }
    this.loginServ.login(this.email, this.mdp).subscribe(onSuccess, onError);
  }

}
