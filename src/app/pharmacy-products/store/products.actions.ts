import { createAction, props } from "@ngrx/store";
import { IProduct } from "src/app/shared/models/product";
import { IProductStateEnums } from "src/app/shared/store/state-enums";

export const GET_PRODUCTS = createAction(IProductStateEnums.GET_PRODUCTS);
export const GET_PRODUCTS_SUCCESS = createAction(IProductStateEnums.GET_PRODUCTS_SUCCESS, props<{ payload: IProduct[] }>());
export const GET_PRODUCTS_FAILED = createAction(IProductStateEnums.GET_PRODUCTS_FAILED, props<{ payload: any }>());

export const GET_PRODUCT = createAction(IProductStateEnums.GET_PRODUCT, props<{ id: string }>());
export const GET_PRODUCT_SUCCESS = createAction(IProductStateEnums.GET_PRODUCT_SUCCESS, props<{ payload: IProduct }>());
export const GET_PRODUCT_FAILED = createAction(IProductStateEnums.GET_PRODUCT_FAILED, props<{ payload: any }>());

export const DELETE_PRODUCT = createAction(IProductStateEnums.DELETE_PRODUCT, props<{ id: string }>());
export const DELETE_PRODUCT_SUCCESS = createAction(IProductStateEnums.DELETE_PRODUCT_SUCCESS);
export const DELETE_PRODUCT_FAILED = createAction(IProductStateEnums.DELETE_PRODUCT_FAILED);

export const CLEAR_STATE = createAction(IProductStateEnums.CLEAR_STATE);
