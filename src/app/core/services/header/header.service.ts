import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { APIConstant } from '../../constants/APIConstant';
import { map, Observable } from 'rxjs';
import { Catalog } from '../../models/header.model';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  http = inject(HttpClient);

  getCategories(): Observable<Catalog> {
    return this.http
      .get<Catalog>(environment.apiUrl + '/' + APIConstant.header)
      .pipe(
        map((response: Catalog) => {
          let updatedResponse = response.map((group) => {
            const nullUris = group.flatMap((category) =>
              category.items
                .filter((item) => item.image === null)
                .map((item) => item.uri)
            );

            return group.map((category) => ({
              items: category.items.map((item) => ({
                ...item,
                routerLink:
                  item.image === null
                    ? `products/${item.uri}`
                    : `products/${nullUris.join('/')}/${item.uri}`,
              })),
            }));
          });

          if (updatedResponse.length > 0) {
            updatedResponse.unshift(updatedResponse.pop()!);
          }

          return updatedResponse;
        })
      );
  }
}
