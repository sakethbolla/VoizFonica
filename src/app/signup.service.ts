import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseUrl = 'http://localhost:9002/signup/'; 
  private baseUrl2 = 'http://localhost:1111/email/send/';   
  constructor(private http:HttpClient) { }

  createUser(User: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'adddata', User);
  }

  getUser(User: object): Observable<object> {
    return this.http.get(`${this.baseUrl}`+'getdata', User);
  }

  SendMail(from:any,subject:any,body:any): Observable<any> {
    return this.http.get(`${this.baseUrl2}${from}/${subject}/${body}`); //will change ...As Per ordermanagement }
  } 


} 
