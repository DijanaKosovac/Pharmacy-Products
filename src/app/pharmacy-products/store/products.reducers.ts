import { createReducer, on } from "@ngrx/store";
import { IProduct } from "src/app/shared/models/product";
import { IProductState } from "../model/product-state";
import { GET_PRODUCTS_SUCCESS } from "./products.actions";

export const initialState: IProductState = {
  productsList: new Array<IProduct>(),
};

const _productReducer = createReducer(initialState,
  on(GET_PRODUCTS_SUCCESS, ((state, { payload }) => getProductsList(state, payload))),

);

const getProductsList = (state, payload) => {
  let productsList: IProduct[] = payload;

  return { ...state, productsList }
}

export function productReducer(state, action) {
  return _productReducer(state, action);
}
