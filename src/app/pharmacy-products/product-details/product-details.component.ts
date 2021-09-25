import { IProduct } from 'src/app/shared/models/product';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'phar-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct = new IProduct();

  constructor(private location: Location, private productService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (id !== 'add') {
        this.productService.getProduct(id).subscribe(elem => {
          console.log(elem.data())
          let data = new IProduct(elem.data());
          this.product = data;
        })
      }
    });
  }

  save() {
    this.productService.saveNewProduct(this.product).then(res => {

    })
  }

  cancel() {
    this.location.back();
  }

}
