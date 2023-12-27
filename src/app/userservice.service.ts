import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
 
  submitUserData(userData: any): Observable<any> {
    
    
    return this.http.post(`http://localhost:8101/create`, userData);

  
}

  constructor(public http:HttpClient) { }
}
