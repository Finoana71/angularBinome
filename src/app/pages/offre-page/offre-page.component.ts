import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offre-page',
  templateUrl: './offre-page.component.html',
  styleUrls: ['./offre-page.component.css']
})
export class OffrePageComponent implements OnInit {
  errorMsg = "";

  nomCategorie = "";
  nomOffre = "";
  prix ="";
  validite ="";
  enCours = "";
  typeForfait = "";
  quantite = "";
  constructor() { }

  ngOnInit(): void {
  }

  enregistrer(){

    
  }
}
