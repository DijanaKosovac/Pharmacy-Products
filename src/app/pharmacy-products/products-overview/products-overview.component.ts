import { DELETE_PRODUCT } from './../store/products.actions';
import { IProduct } from './../../shared/models/product';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { AppState, selectProductsList } from 'src/app/shared/store/state';
import { GET_PRODUCTS } from '../store/products.actions';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'phar-products-overview',
  templateUrl: './products-overview.component.html',
})
export class ProductsOverviewComponent implements OnInit {
  listData: MatTableDataSource<IProduct>;
  ngUnsubscribe: Subject<any> = new Subject();
  displayedColumns: string[] = [
    'options',
    'name',
    'manufacturer',
    'price',
    'expiryDate',
  ];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getProducts() {
    this.store.dispatch(GET_PRODUCTS());
    this.store.select(selectProductsList).pipe(takeUntil(this.ngUnsubscribe)).subscribe(data => {
      this.listData = new MatTableDataSource(data);
    })
  }

  deleteProduct(id: string) {
    this.store.dispatch(DELETE_PRODUCT({ id: id }));
  }
}
