import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIConstant } from '../constants/APIConstant';
// import { PaginatedResponse } from '../models/ProductList';
// import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private apiUrl = 'https://gearenhance.s3.us-east-1.amazonaws.com/data.json';
  
  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
