import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductListService } from '../../core/services/product-list.service';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { SelectItem, SelectItemGroup } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-product-lists',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    CommonModule,
    MultiSelectModule,
  ],
  templateUrl: './product-lists.component.html',
  styleUrl: './product-lists.component.css',
  providers: [ProductListService],
  encapsulation: ViewEncapsulation.None,
})
export class ProductListsComponent implements OnInit {
  visible: boolean = false;
  public groupedFullfilment: SelectItemGroup[] = [];
  public groupedSize: SelectItemGroup[] = [];
  public groupColor: SelectItemGroup[] = [];
  public locations: SelectItem[] = [];

  selectedFullfilment: string | undefined;
  selectedSize: string[] = [];
  selectedColor: string[] = [];
  public baseSkus: any[] = [];
  public filteredBaseSkus: any[] = [];

  constructor(private productService: ProductListService) {}
  ngOnInit(): void {
    this.productService.getData().subscribe((response) => {
      this.baseSkus = response.data.base_sku;
      this.processOptionsAndLocations(
        response.data.options,
        response.data.locations
      );
      this.filterItems();
      console.log(this.baseSkus);
    });
  }
  processOptionsAndLocations(options: any[], locations: any[]) {
    options.forEach((option) => {
      if (option.name === 'color') {
        this.groupColor = [
          {
            label: 'Color',
            value: 'color',
            items: option.values.map((value: any) => ({
              label: value.name,
              value: value.id,
            })),
          },
        ];
      }
      if (option.name === 'size') {
        this.groupedSize = [
          {
            label: 'Size',
            value: 'size',
            items: option.values.map((value: any) => ({
              label: value.name,
              value: value.id,
            })),
          },
        ];
      }
    });
    if (locations) {
      this.groupedFullfilment = [
        {
          label: 'Fullfilment Facility',
          value: 'fullfilment',
          items: [
            {
              label: 'All',
              value: 'all',
            },
            ...locations.map((location) => ({
              label: location.name,
              value: location.id,
              icon: location.icon,
              details: location.value,
            })),
          ],
        },
      ];
    }
  }
  filterItems() {
    this.filteredBaseSkus = this.baseSkus.filter((item) => {
      const conditions: boolean[] = [];
      const matches: any = {
        [item.location]: this.selectedFullfilment,
        [item.size_id]: this.selectedSize,
        [item.color_id]: this.selectedColor,
      };
      // lay ta ca khoa (key) trong doi tuong matches
      const matches_keys = Object.keys(matches);
      for (let i = 0; i < matches_keys.length; i++) {
        const key = matches_keys[i];
        if (matches[key] === 'all') continue;
        //kiem tra neu gia tri la mang(chon duoc nhieu color, size)
        if (Array.isArray(matches[key])) {
          if (matches[key].length > 0) {
            for (let j = 0; j < matches[key].length; j++) {
              const selectedCondition = matches[key][j];
              if (selectedCondition.value === key) {
                conditions.push(true);
                break;
              } else if (j == matches[key].length - 1) {
                conditions.push(false);
              }
            }
          }
        } else {
          //neu khong cho gia tri nao , bo qua kiem tra 
          if (!matches[key]) continue;
          // kiem tra neu gia tri san pham khop voi lua chon 
          conditions.push(key === matches[key]);
        }
      }
      return conditions.every((condition: boolean) => condition);
    });
  }
  showDialog() {
    this.visible = true;
  }
}
