import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-currency-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency-switcher.component.html',
  styleUrl: './currency-switcher.component.css'
})
export class CurrencySwitcherComponent {
  @Output() currencySelected = new EventEmitter<string>();
  isOpen = false;
  selectedCurrency: string = 'USD';
  currencies: string[] = ['USD', 'GBP', 'EUR', 'CAD', 'AUD'];

  openDropdown() {
    this.isOpen = true;
  }

  closeDropdown() {
    this.isOpen = false;
  }

  selectCurrency(currency: string) {
    this.selectedCurrency = currency;
  }

  applySelection() {
    this.currencySelected.emit(this.selectedCurrency);
    this.closeDropdown();
  }

  getFlag(currency: string): string {
    const flags: { [key: string]: string } = {
      USD: 'https://wise.com/public-resources/assets/flags/rectangle/usd.png',
      GBP: 'https://wise.com/public-resources/assets/flags/rectangle/gbp.png',
      EUR: 'https://wise.com/public-resources/assets/flags/rectangle/eur.png',
      CAD: 'https://wise.com/public-resources/assets/flags/rectangle/cad.png',
      AUD: 'https://wise.com/public-resources/assets/flags/rectangle/aud.png'
    };
    return flags[currency] || 'https://wise.com/public-resources/assets/flags/rectangle/usd.png';
  }
}
