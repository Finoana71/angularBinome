import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-group-button',
  templateUrl: './group-button.component.html',
  styleUrls: ['./group-button.component.css']
})
export class GroupButtonComponent implements OnInit {
  @Input() titre = "";
  constructor() { }
  ngOnInit(): void {
    console.log(this.titre);
  }
  getTarif(){
    if(this.titre=="tarifs"){
      return true;
    }
    else{
      return false;
    }
  }

  getOffre(){
    if(this.titre=="offres"){
      return true;
    }
    else{
      return false;
    }
  }
  getStat(){
    if(this.titre=="statistiques"){
      return true;
    }
    else{
      return false;
    }
  }
  getMoney(){
    if(this.titre=="mobile-money"){
      return true;
    }
    else{
      return false;
    }
  }

  getAbout(){
    if(this.titre=="about"){
      return true;
    }
    else{
      return false;
    }
  }
}
