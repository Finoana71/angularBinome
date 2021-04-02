import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { base_url } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private baseUrl = base_url+'detailsOffres';
  constructor(private http: HttpClient) { }
  
  get(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(categorie: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, categorie);
  }

  update(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getList(){
    var reqHeader = ({
      'Authorization' : 'Bearer '+localStorage.getItem("token")
    });
    return this.http.get(`${this.baseUrl}`,{headers:reqHeader});
  }
}
