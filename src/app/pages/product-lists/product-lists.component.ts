import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductListService } from '../../core/services/product-list.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DialogModule, } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { SelectItemGroup } from 'primeng/api';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-product-lists',
  standalone: true,
  imports: [DialogModule, ButtonModule, DropdownModule, FormsModule,CommonModule],
  templateUrl: './product-lists.component.html',
  styleUrl: './product-lists.component.css',
  providers: [ProductListService],
  encapsulation: ViewEncapsulation.None,
})
export class ProductListsComponent implements OnInit{
    
  visible: boolean = false;
  groupedFullfilment: SelectItemGroup[];
  groupedSize: SelectItemGroup[];
  groupColor: SelectItemGroup[];

  selectedFullfilment: string | undefined;
  selectedSize: string | undefined;
  selectedColor: string | undefined;
  public baseSkus: any[] = [];

  constructor(private productService: ProductListService) {
    this.groupedFullfilment = [
      {
        label: 'Fullfilment',
        value: 'F',
        items: [
          { label: 'All', value: 'All' },
          { label: 'Denali', value: 'Denali' },
          { label: 'Vini', value: 'Vini' },
        ]
      },
    ];

    this.groupedSize = [
      {
        label: 'Size',
        value: 'Si',
        items: [
          { label: 'All', value: 'All' },
          { label: 'S', value: 'S' },
          { label: 'M', value: 'M' },
          { label: 'L', value: 'L' },
          { label: 'XL', value: 'XL' },
        ]
      },
    ];

    this.groupColor = [
      {
        label: 'Color',
        value: 'Co',
        items: [
          { label: 'All', value: 'All' },
          { label: 'Denali', value: 'Denali' },
          { label: 'White', value: 'White' },
          { label: 'Ash', value: 'Ash' },
          { label: 'Black', value: 'Black' },
          { label: 'Dark Heather', value: 'Dark Heather' },
        ]
      },
    ];
  }
  ngOnInit(): void {
    this.productService.getData()
      .subscribe(
        (response) => {
          console.log('API Response:', response);
          if (response && response.base_sku) {
            this.baseSkus = response.base_sku;
            console.log('Base SKUs:', this.baseSkus);
          } else {
            console.error('Data is not in expected format');
          }
        },
      );
  }

  showDialog() {
    this.visible = true;
  }
}
