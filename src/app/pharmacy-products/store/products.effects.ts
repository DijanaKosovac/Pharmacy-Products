import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { ProductsService } from '../products.service';
import { GET_PRODUCT, GET_PRODUCTS, GET_PRODUCTS_FAILED, GET_PRODUCT_FAILED, DELETE_PRODUCT, DELETE_PRODUCT_FAILED, SAVE_PRODUCT, SAVE_PRODUCT_FAILED, UPDATE_PRODUCT, UPDATE_PRODUCT_FAILED } from './products.actions';
import { of } from 'rxjs';
import { IProductStateEnums } from 'src/app/shared/store/state-enums';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable()

export class ProductsEffects {

  getProducts$ = createEffect(() => this.actions$.pipe(
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

  saveProduct$ = createEffect(() => this.actions$.pipe(
    ofType(SAVE_PRODUCT),
    switchMap(action => this.productsService.saveNewProduct(action.product).pipe(
      map(data => {
        this.router.navigate(['overview']);
        return ({ type: IProductStateEnums.SAVE_PRODUCT_SUCCESS, payload: Object.freeze(data) })
      }),
      catchError(error => of(SAVE_PRODUCT_FAILED({ payload: error }))))
    )
  ));

  updateProduct$ = createEffect(() => this.actions$.pipe(
    ofType(UPDATE_PRODUCT),
    switchMap(action => this.productsService.updateProduct(action.productId, action.product).pipe(
      map(data => {
        this.router.navigate(['overview']);
        return ({ type: IProductStateEnums.UPDATE_PRODUCT_SUCCESS, payload: data })
      }),
      catchError(error => of(UPDATE_PRODUCT_FAILED({ payload: error }))))
    )
  ));

  deleteProduct$ = createEffect(() => this.actions$.pipe(
    ofType(DELETE_PRODUCT),
    switchMap(action => this.productsService.deleteProduct(action.id).pipe(
      map(data => ({ type: IProductStateEnums.DELETE_PRODUCT_SUCCESS, payload: data })),
      catchError(error => of(DELETE_PRODUCT_FAILED())))
    )
  ));

  constructor(
    private actions$: Actions,
    private router: Router,
    private productsService: ProductsService
  ) { }
}
