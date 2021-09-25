import { createReducer, on } from "@ngrx/store";
import { IProduct } from "src/app/shared/models/product";
import { IProductState } from "../model/product-state";
import { CLEAR_STATE, GET_PRODUCTS_SUCCESS, GET_PRODUCT_SUCCESS } from "./products.actions";

export const initialState: IProductState = {
  productsList: new Array<IProduct>(),
  product: new IProduct()
};

const _productReducer = createReducer(initialState,
  on(GET_PRODUCTS_SUCCESS, ((state, { payload }) => getProductsList(state, payload))),
  on(GET_PRODUCT_SUCCESS, ((state, { payload }) => getProduct(state, payload))),
  on(CLEAR_STATE, ((state) => clearState(state))),
);

const getProductsList = (state, payload) => {
  let productsList: IProduct[] = payload;

  return { ...state, productsList }
}

const getProduct = (state, payload) => {
  let product: IProduct = payload;

  return { ...state, product }
}

const clearState = state => {
  let product: IProduct = new IProduct();

  return { ...state, product }
}

export function productReducer(state, action) {
  return _productReducer(state, action);
}
