import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TarifService } from 'src/app/services/tarif.service';

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.css']
})
export class TarifComponent implements OnInit {
  public tarifs: any = [];
  public message:any="";
  constructor(private service : TarifService,private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    const onSuccess = response => {
      if (response['status'] == 200) {
        this.tarifs = response.data;
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
