import { createAction, props } from "@ngrx/store";
import { IProductStateEnums } from "src/app/shared/store/state-enums";
import { IProduct } from "../model/product";

export const GET_PRODUCTS = createAction(IProductStateEnums.GET_PRODUCTS);
export const GET_PRODUCTS_SUCCESS = createAction(IProductStateEnums.GET_PRODUCTS_SUCCESS, props<{ payload: IProduct[] }>());
export const GET_PRODUCTS_FAILED = createAction(IProductStateEnums.GET_PRODUCTS_FAILED, props<{ payload: any }>());
