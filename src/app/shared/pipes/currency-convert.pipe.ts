import { Pipe, PipeTransform } from '@angular/core';
import { CataloghomeService } from '../../core/services/CatalogHome/cataloghome.service';
import { TopProductService } from '../../core/services/CatalogHome/TopProduct/top-product.service';
import { LeadingService } from '../../core/services/CatalogHome/Leading/leading.service';
import { BestService } from '../../core/services/CatalogHome/Best/best.service';

@Pipe({
  name: 'currencyConvert',
  standalone: true
})
export class CurrencyConvertPipe implements PipeTransform {

  constructor(private productService: CataloghomeService,private productService1: TopProductService,
    private productService2: LeadingService, private productService3: BestService
  ) {}
  

  transform(value: number, fromCurrency: string, toCurrency: string): number {
    if (value == null || fromCurrency == null || toCurrency == null) {
      return value;
    }
    return this.productService.convert(value, fromCurrency, toCurrency);
  }

  transform1(value: number, fromCurrency: string, toCurrency: string): number {
    if (value == null || fromCurrency == null || toCurrency == null) {
      return value;
    }
    return this.productService1.convert(value, fromCurrency, toCurrency);
  }

  transform2(value: number, fromCurrency: string, toCurrency: string): number {
    if (value == null || fromCurrency == null || toCurrency == null) {
      return value;
    }
    return this.productService2.convert(value, fromCurrency, toCurrency);
  }

  transform3(value: number, fromCurrency: string, toCurrency: string): number {
    if (value == null || fromCurrency == null || toCurrency == null) {
      return value;
    }
    return this.productService3.convert(value, fromCurrency, toCurrency);
  }

}
