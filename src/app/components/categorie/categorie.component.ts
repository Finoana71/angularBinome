import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  public categories: any = [];
  public message:any="";
  

  constructor(private categirieservice : CategorieService,private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
  }
  
  reloadData() {
      const onSuccess = response => {
        if (response['status'] == 200) {
          this.categories = response.data;
        } else {
          this.message = response.message;
        }
      }
      const onError = response => {
        this.message = 'Erreur serveur';
      }
      this.categirieservice.getCategorieList().subscribe(onSuccess, onError); 
  }

}
