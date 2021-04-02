import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/services/detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailsoffre',
  templateUrl: './detailsoffre.component.html',
  styleUrls: ['./detailsoffre.component.css']
})
export class DetailsoffreComponent implements OnInit {
  public details: any = [];
  public message:any="";

  constructor(private service : DetailService,private router: Router) { }

  ngOnInit(): void {
    this.reloadData()
  }

  reloadData() {
    const onSuccess = response => {
      if (response['status'] == 200) {
        this.details = response.data;
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
