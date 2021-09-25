import { IProduct } from './../../shared/models/product';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'phar-products-overview',
  templateUrl: './products-overview.component.html',
})
export class ProductsOverviewComponent implements OnInit {
  listData: MatTableDataSource<IProduct[]>;
  displayedColumns: string[] = [
    'name',
    'manufacturer',
    'price',
    'expiryDate',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
