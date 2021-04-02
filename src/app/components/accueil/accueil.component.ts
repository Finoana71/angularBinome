import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private route: Router,private loginServ : LoginService) { }

  ngOnInit(): void {
    this.loginServ.testLoginRedirect(this.route);
  }

  logout(){
    this.loginServ.logout();
    this.loginServ.testLoginRedirect(this.route);
  }

}
