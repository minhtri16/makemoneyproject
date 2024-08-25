import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { APIConstant } from '../../constants/APIConstant';
import { map, Observable } from 'rxjs';
import { productFilter } from '../../models/product-filter.model';

@Injectable({
  providedIn: 'root',
})
export class ProductFilterService {
  http = inject(HttpClient);

  getProductFilter(
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

  // Hard code
  // getProductFilter(subcategoryId: string): Observable<productFilter[]> {
  //   return this.http
  //     .get<any>(environment.apiUrl + '/' + APIConstant.productFilter, {
  //       params: { subcategoryId: subcategoryId },
  //     })
  //     .pipe(
  //       map((response) => {
  //         return [
  //           {
  //             brandName: 'Arctic Zone',
  //             model: '1717',
  //             name: 'Unisex Garment-Dyed T-shirt',
  //             createAt: '2024-06-25T04:31:17',
  //             product_id: '1bb300ad-7ff9-33b0-e063-25171facad76',
  //             printProvider: {
  //               ProviderName: ['C4'],
  //               totalProvider: 1,
  //             },
  //             minPrice: 15,
  //             tags: [
  //               {
  //                 tagName: 'Eco-friendly',
  //               },
  //               {
  //                 tagName: 'Bestseller',
  //               },
  //               {
  //                 tagName: 'New',
  //               },
  //             ],
  //             analytics: {
  //               trendingScore: 0.552,
  //               profitScore: 0.651,
  //               rate: 4,
  //             },
  //             totalSizes: 8,
  //             totalColors: 11,
  //             firstImg:
  //               'https://images.printify.com/api/catalog/65439a6b875d6752d6056b52',
  //             secondImg:
  //               'https://images.printify.com/api/catalog/65439a7db56afc593101e296',
  //           },
  //           {
  //             brandName: 'AS Colour',
  //             model: '64000',
  //             name: 'Unisex T-Shirt',
  //             createAt: '2024-06-25T04:41:30',
  //             product_id: '1bb300ad-7ffb-33b0-e063-25171facad76',
  //             printProvider: {
  //               ProviderName: ['Awkward Styles', 'Sensaria'],
  //               totalProvider: 2,
  //             },
  //             minPrice: 25,
  //             tags: [
  //               {
  //                 tagName: 'New',
  //               },
  //             ],
  //             analytics: {
  //               trendingScore: 0.638,
  //               profitScore: 0.378,
  //               rate: 4,
  //             },
  //             totalSizes: 8,
  //             totalColors: 17,
  //             firstImg:
  //               'https://images.printify.com/api/catalog/655ca7fd791d744484037e25',
  //             secondImg:
  //               'https://images.printify.com/api/catalog/65436788515749d7ca00ce69',
  //           },
  //           {
  //             brandName: 'AS Colour',
  //             model: '3005',
  //             name: 'Unisex Jersey Short Sleeve V-Neck Tee',
  //             createAt: '2024-06-25T04:45:12',
  //             product_id: '1bb300ad-7ffc-33b0-e063-25171facad76',
  //             printProvider: {
  //               ProviderName: ['Awkward Styles', 'Expert Workwear', 'Harrier'],
  //               totalProvider: 3,
  //             },
  //             minPrice: 17,
  //             tags: [
  //               {
  //                 tagName: 'New',
  //               },
  //             ],
  //             analytics: {
  //               trendingScore: 0.335,
  //               profitScore: 0.642,
  //               rate: 4,
  //             },
  //             totalSizes: 8,
  //             totalColors: 11,
  //             firstImg:
  //               'https://printify.com/cdn-cgi/image/width=520,quality=100,format=avif/https://images.printify.com/api/catalog/6673d112e4b3fdefa3040dc4',
  //             secondImg:
  //               'https://images.printify.com/api/catalog/667bd62b498fbee6e70eee02',
  //           },
  //           {
  //             brandName: 'adidas®',
  //             model: '6210',
  //             name: 'Unisex CVC Jersey T-shirt',
  //             createAt: '2024-06-25T04:47:31',
  //             product_id: '1bb300ad-7ffd-33b0-e063-25171facad76',
  //             printProvider: {
  //               ProviderName: ['Awkward Styles'],
  //               totalProvider: 1,
  //             },
  //             minPrice: 16,
  //             tags: [
  //               {
  //                 tagName: 'New',
  //               },
  //             ],
  //             analytics: {
  //               trendingScore: 0.337,
  //               profitScore: 0.526,
  //               rate: 4,
  //             },
  //             totalSizes: 8,
  //             totalColors: 11,
  //             firstImg:
  //               'https://images.printify.com/api/catalog/667bd62b498fbee6e70eee02',
  //             secondImg:
  //               'https://images.printify.com/api/catalog/5d95f863534335302960c243',
  //           },
  //           {
  //             brandName: 'Gildan',
  //             model: '5000',
  //             name: 'Heavy Cotton T-shirt',
  //             createAt: '2024-06-25T04:50:00',
  //             product_id: '2bc400bd-7ffe-34b0-f063-36182gacad87',
  //             printProvider: {
  //               ProviderName: ['Printful', 'Printify'],
  //               totalProvider: 2,
  //             },
  //             minPrice: 12,
  //             tags: [
  //               {
  //                 tagName: 'Best Value',
  //               },
  //               {
  //                 tagName: 'Popular',
  //               },
  //             ],
  //             analytics: {
  //               trendingScore: 0.512,
  //               profitScore: 0.612,
  //               rate: 5,
  //             },
  //             totalSizes: 7,
  //             totalColors: 12,
  //             firstImg:
  //               'https://images.printify.com/api/catalog/60d063d277b52a73842cd811',
  //             secondImg:
  //               'https://images.printify.com/api/catalog/639827f519b14e627301b8a7',
  //           },
  //           {
  //             brandName: 'Next Level',
  //             model: '3600',
  //             name: "Men's Cotton Crew T-Shirt",
  //             createAt: '2024-06-25T04:53:21',
  //             product_id: '3cd500ad-7fff-35c0-g073-47193fbcad98',
  //             printProvider: {
  //               ProviderName: ['Printful'],
  //               totalProvider: 1,
  //             },
  //             minPrice: 14,
  //             tags: [
  //               {
  //                 tagName: 'Soft',
  //               },
  //               {
  //                 tagName: 'Comfortable',
  //               },
  //             ],
  //             analytics: {
  //               trendingScore: 0.432,
  //               profitScore: 0.572,
  //               rate: 4.5,
  //             },
  //             totalSizes: 8,
  //             totalColors: 15,
  //             firstImg:
  //               'https://images.printify.com/api/catalog/60d9d8f37b62aa662b641f69',
  //             secondImg:
  //               'https://images.printify.com/api/catalog/63973c3a89f7f5571006c858',
  //           },
  //         ];
  //       })
  //     );
  // }
}
