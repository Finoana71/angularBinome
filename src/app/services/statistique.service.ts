import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { base_url } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  private baseUrl = base_url+'statOffre';
  constructor(private http: HttpClient) { }
  getList(){
    var reqHeader = ({
      'Authorization' : 'Bearer '+localStorage.getItem("token")
    });
    return this.http.get(`${this.baseUrl}`,{headers:reqHeader});
  }
}
