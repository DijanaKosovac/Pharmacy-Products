import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { ProductsService } from '../products.service';
import { GET_PRODUCT, GET_PRODUCTS, GET_PRODUCTS_FAILED, GET_PRODUCT_FAILED } from './products.actions';
import { of } from 'rxjs';
import { IProductStateEnums } from 'src/app/shared/store/state-enums';
import { catchError, map, switchMap } from 'rxjs/operators';
@Injectable()

export class ProductsEffects {

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(GET_PRODUCTS),
    switchMap(action => this.productsService.getProducts().pipe(
      map(data => ({ type: IProductStateEnums.GET_PRODUCTS_SUCCESS, payload: data })),
      catchError(error => of(GET_PRODUCTS_FAILED({ payload: error }))))
    )
  ));

  getProduct$ = createEffect(() => this.actions$.pipe(
    ofType(GET_PRODUCT),
    switchMap(action => this.productsService.getProduct(action.id).pipe(
      map(data => ({ type: IProductStateEnums.GET_PRODUCT_SUCCESS, payload: data })),
      catchError(error => of(GET_PRODUCT_FAILED({ payload: error }))))
    )
  ));

  constructor(
    private actions$: Actions,
    private productsService: ProductsService

  ) { }
}
