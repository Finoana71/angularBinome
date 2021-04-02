import { Component, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {
  public depots: any = [];
  public message:any="";

  constructor(private service : ValidationService,private router: Router) { }

  ngOnInit(): void {
    this.reloadData()
  }
  reloadData() {
    const onSuccess = response => {
      if (response['status'] == 200) {
        this.depots = response.data;
      } else {
        this.message = response.message;
      }
    }
    const onError = response => {
      this.message = 'Erreur serveur';
    }
    this.service.getList().subscribe(onSuccess, onError); 
  }
}
