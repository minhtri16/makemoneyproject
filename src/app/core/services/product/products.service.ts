import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { APIConstant } from '../../constants/APIConstant';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  http = inject(HttpClient);

  getProduct(productId: number): Observable<Product> {
    return this.http
      .get<any>(
        environment.apiUrl + '/' + APIConstant.product + '/' + productId
      )
      .pipe(
        map((response) => {
          const sizeGuide = response.result.info.size_guide;
          const { tableData, sizes } = this.transformSizeGuide(sizeGuide);
          return {
            ...response.result,
            info: {
              about: response.result.info.about,
              key_features: response.result.info.key_features,
              care_instructions: response.result.info.care_instructions,
              size_guide: { tableData, sizes },
            },
          };
        })
      );
  }

  private transformSizeGuide(sizeGuide: any[]): {
    tableData: any[];
    sizes: string[];
  } {
    const sizes = [...new Set(sizeGuide.map((item) => item.size))];
    const names = [...new Set(sizeGuide.map((item) => item.name))];

    const tableData = names.map((name) => {
      const rowData: any = { name: name };
      sizeGuide.forEach((item) => {
        if (item.name === name) {
          rowData[item.size] = item.value;
        }
      });
      return rowData;
    });

    return { tableData, sizes };
  }
}
