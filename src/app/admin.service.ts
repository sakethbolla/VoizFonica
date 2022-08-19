import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  static getUserList(){
    throw new Error("Method not implemented");
    
  }


  private baseUrl = 'http://localhost:9002/';  
  constructor(private http:HttpClient) { }



  getUserList(): Observable<any> {

    return this.http.get(`${this.baseUrl}`+'getuser');  //will change ...As Per order management

  }
  // below this all API connect will be there
  // we can have the multiple connect
  createUser(User: object): Observable<object> {

    return this.http.post(`${this.baseUrl}`+'adduser', User);

  }



  deleteUser(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}deleteuser/${id}`, { responseType: 'text' });

  }



  getUser(id: number): Observable<Object> {

    return this.http.get(`${this.baseUrl}/getuser/${id}`);

  }



  updateUser(id: number, value: any): Observable<Object> {

    return this.http.post(`${this.baseUrl}/updateuser/${id}`, value);

  }

} 
