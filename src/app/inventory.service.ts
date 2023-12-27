import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  getInventoryDataByProvider(providerName: string): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8100/inventory/${providerName}`);
  }
  
  constructor(private http: HttpClient) { }

  increaseInventory(providerName: string): Observable<any> {
    return this.http.post<any>(`http://localhost:8100/increase-inventory/${providerName}`, {});
  }
}
