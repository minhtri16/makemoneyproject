import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import {ProductHome } from '../../models/ProductHome';
import { CatalogCategory, CatalogItem, CatalogResponse } from '../../models/CategoryHome';
import { environment } from '../../../../environments/environment';
import { APIConstant } from '../../constants/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class CataloghomeService {
  

  constructor(private http: HttpClient) {}

  getAllProductHome(): Observable<{
    topTrending: ProductHome[],
    bestRated: ProductHome[],
    lendingProfit: ProductHome[],
    catalog: CatalogItem[]
  }> {
    return this.http.get<any>(`${environment.apiUrl}/${APIConstant.home}`).pipe(
      map((response: any) => {
        const uniqueItems = new Set<CatalogItem>();
        const categories = response.categories as CatalogCategory[][];

        if (Array.isArray(categories)) {
          categories.forEach((categoryGroup: CatalogCategory[]) => {
            if (Array.isArray(categoryGroup)) {
              categoryGroup.forEach((category: CatalogCategory) => {
                if (Array.isArray(category.items)) {
                  category.items.forEach((item: CatalogItem) => {
                    uniqueItems.add(item);
                  });
                }
              });
            }
          });
        }

        return {
          topTrending: response.top_trending_products as ProductHome[],
          bestRated: response.best_rated_by_merchants as ProductHome[],
          lendingProfit: response.lending_profit_makers as ProductHome[],
          catalog: Array.from(uniqueItems)
        };
      })
    );
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