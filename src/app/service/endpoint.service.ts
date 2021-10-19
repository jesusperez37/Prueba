import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  private headers: HttpHeaders = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json');

  constructor(private http: HttpClient) { }

  getDataPost(): Promise<any>{
    const url = 'https://jsonplaceholder.typicode.com/posts'
    return this.http.get<any>(url,{headers:this.headers}).toPromise();
  }

  getDataUser(): Promise<any>{
    const url = 'https://jsonplaceholder.typicode.com/users'
    return this.http.get<any>(url,{headers:this.headers}).toPromise();
  }
}
