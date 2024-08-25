import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { APIConstant } from '../../constants/APIConstant';
import { map, Observable } from 'rxjs';
import { productFilter } from '../../models/product-filter.model';

@Injectable({
  providedIn: 'root',
})
export class RecentlyService {
  // productIds = JSON.parse(localStorage.getItem('productIds') || '[]');

  http = inject(HttpClient);

  getRecently(product_id: string[]): Observable<productFilter[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .post<any>(
        `${environment.apiUrl}/${APIConstant.recently_product}`,
        product_id,
        { headers }
      )
      .pipe(
        map((response) => {
          return response.map((product: any) => {
            const { media, ...rest } = product;
            const firstImg = product.media[0].src;
            const secondImg = product.media[1].src;

            return {
              ...rest,
              firstImg,
              secondImg,
            };
          });
        })
      );
  }
}
