import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductHome } from '../../../models/ProductHome';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { APIConstant } from '../../../constants/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class BestService {

 

  constructor(private http: HttpClient) {}

 

  getALLBestProducts(page: number): Observable<any>{
    return this.http.get(`${environment.apiUrl}/${APIConstant.bestproduct}?page=${page}`);
  }


 //chuyen tien
 private exchangeRates: { [key: string]: number } = {
  USD: 1,
  GBP: 0.75,
  EUR: 0.85,
  CAD: 1.35,
  AUD: 1.45
};

convert(price: number, fromCurrency: string, toCurrency: string): number {
  if (fromCurrency === toCurrency) {
    return price;
  }
  const fromRate = this.exchangeRates[fromCurrency];
  const toRate = this.exchangeRates[toCurrency];
  return (price / fromRate) * toRate;
}
}
