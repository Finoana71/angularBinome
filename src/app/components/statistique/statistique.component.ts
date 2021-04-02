import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatistiqueService } from 'src/app/services/statistique.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  public stats: any = [];
  public message:any="";

  constructor(private service : StatistiqueService,private router: Router) { }

  ngOnInit(): void {
    this.reloadData()
  }
  reloadData() {
    const onSuccess = response => {
      if (response['status'] == 200) {
        this.stats = response.data;
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
