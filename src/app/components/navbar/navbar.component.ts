import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router,private loginServ : LoginService) { }

  ngOnInit(): void {
    this.loginServ.testLoginRedirect(this.route);
  }

  logout(){
    this.loginServ.logout();
    this.loginServ.testLoginRedirect(this.route);
  }

}
