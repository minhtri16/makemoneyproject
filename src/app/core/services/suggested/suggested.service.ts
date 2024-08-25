import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { APIConstant } from '../../constants/APIConstant';
import { productFilter } from '../../models/product-filter.model';

@Injectable({
  providedIn: 'root',
})
export class SuggestedService {
  http = inject(HttpClient);

  getSuggested(
    subcategoryId: string,
    productId: number
  ): Observable<productFilter[]> {
    return this.http
      .get<any>(
        environment.apiUrl +
          '/' +
          APIConstant.productFilter +
          '/' +
          productId +
          '/' +
          subcategoryId
      )
      .pipe(
        map((response) => {
          return response.content.map((product: any) => {
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
