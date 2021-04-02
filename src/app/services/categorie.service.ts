import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { base_url } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private baseUrl = base_url+'categorieOffre';
  constructor(private http: HttpClient) { }
  
  getCategorie(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCategorie(categorie: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, categorie);
  }

  updateCategorie(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCategorie(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCategorieList(){
    var reqHeader = ({
      'Authorization' : 'Bearer '+localStorage.getItem("token")
    });
    return this.http.get(`${this.baseUrl}`,{headers:reqHeader});
  }
}
