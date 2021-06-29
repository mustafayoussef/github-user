import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const enum endpoint {
  users = 'users',
  user = 'user',
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  URL = 'https://api.github.com/'
  constructor(private http: HttpClient) { }
  getUsers(per_page: number): Observable<any> {
    let params = new HttpParams().append('per_page', `${per_page}`)
    return this.http.get(`${this.URL}${endpoint.users}`, { params })
  }
  profile(id:any):Observable<any>{
    return this.http.get(`${this.URL}${endpoint.user}/${id}`)
  }
}
