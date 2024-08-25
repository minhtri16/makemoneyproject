import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CurrencySwitcherComponent } from '../currency-switcher/currency-switcher.component';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [CurrencySwitcherComponent],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {
  @ViewChild(CurrencySwitcherComponent) currencyModal!: CurrencySwitcherComponent;
  @Input() selectedCurrency: string = 'USD';

  openDropdown() {
    this.currencyModal.openDropdown();
  }

  @Output() currencySelected = new EventEmitter<string>();
  updateCurrency(currency: string) {
    this.selectedCurrency = currency;
    this.currencySelected.emit(currency);
  }
}
