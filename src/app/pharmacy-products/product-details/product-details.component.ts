import { CLEAR_STATE } from './../store/products.actions';
import { selectProduct } from './../../shared/store/state';
import { IProduct } from 'src/app/shared/models/product';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/store/state';
import { GET_PRODUCT } from '../store/products.actions';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'phar-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct = new IProduct();
  isAddNewProduct: boolean = false;
  productId: string;
  ngUnsubscribe: Subject<any> = new Subject();

  constructor(private location: Location, private productService: ProductsService, private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (id === 'add') {
        this.isAddNewProduct = true;
      } else {
        this.isAddNewProduct = false;
        this.productId = id;
        this.store.dispatch(GET_PRODUCT({ id: this.productId }))
      }
    });
    this.getProduct();
  }

  ngOnDestroy() {
    this.store.dispatch(CLEAR_STATE());
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getProduct() {
    this.store.select(selectProduct).pipe(takeUntil(this.ngUnsubscribe)).subscribe(data => {
      this.product = cloneDeep(data);
    })
  }

  save() {
    if (this.isAddNewProduct) {
      this.productService.saveNewProduct({ ...this.product }).then(res => {
      })
    } else {
      this.productService.updateProduct(this.productId, this.product)
    }
  }

  cancel() {
    this.location.back();
  }

}
