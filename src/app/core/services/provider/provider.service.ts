import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { APIConstant } from '../../constants/APIConstant';
import { map, Observable } from 'rxjs';
import { ModifiedResponse, Variants } from '../../models/provider.model';

@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  http = inject(HttpClient);

  // Hard code
  // getProvider(providerId: number) {
  //   return this.http
  //     .get<any>(
  //       environment.apiUrl + '/' + APIConstant.provider + '/' + providerId
  //     )
  //     .pipe(
  //       map((response) => {
  //         return response
  //       })
  //     );
  // }

  getProvider(providerId: number): Observable<ModifiedResponse[]> {
    return this.http
      .get<any>(`${environment.apiUrl}/${APIConstant.provider}/${providerId}`)
      .pipe(
        map((response) => {
          // Assuming the response structure is similar to the provided example
          return response.result.map((provider: any) => {
            const {
              variants,
              shippingDetails,
              brandingFeatures,
              production,
              ...otherFields
            } = provider;

            // Create a Set to collect unique option keys
            const optionKeySet = new Set<string>();

            // Loop through all variants to collect unique keys
            variants.forEach((variant: Variants) => {
              Object.keys(variant.options || {}).forEach((key) => {
                optionKeySet.add(key);
              });
            });

            // Convert the Set to an array
            const OptionKeys = Array.from(optionKeySet);

            // Construct ModifiedResponse object
            const modifiedResponse: ModifiedResponse = {
              outside: {
                ...otherFields,
              },
              optionKeys: OptionKeys || [],
              inside: {
                product_variants: variants || [],
                shipping: shippingDetails || [],
                branding: brandingFeatures || [],
                production: production || [],
              },
            };

            return modifiedResponse;
          });
        })
      );
  }
}
