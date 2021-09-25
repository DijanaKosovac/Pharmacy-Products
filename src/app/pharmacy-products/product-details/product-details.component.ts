import { IProduct } from 'src/app/shared/models/product';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'phar-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  cancel() {
    this.location.back();
  }

}
