import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenuModule } from 'primeng/megamenu';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { HeaderService } from '../../../core/services/header/header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MegaMenuModule,
    SidebarModule,
    ButtonModule,
  ],
  providers: [HeaderService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  headerSrv = inject(HeaderService);
  sidebarVisible: boolean = false;
  items: MegaMenuItem[];

  constructor() {
    this.items = [
      {
        label: 'Catalog',
        root: true,
        items: [],
      },
    ];
  }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories() {
    this.headerSrv.getCategories().subscribe((response) => {
      this.items = [
        {
          label: 'Catalog',
          root: true,
          items: response,
        },
      ];
      console.log(response);
      
    });
  }
}
