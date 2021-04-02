import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  public offres: any = [];
  public message:any="";

  constructor(private service : OffreService,private router: Router) { }

  ngOnInit(): void {
    this.reloadData()
  }
  reloadData() {
    const onSuccess = response => {
      if (response['status'] == 200) {
        this.offres = response.data;
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
