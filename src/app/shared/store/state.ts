import { createSelector } from "@ngrx/store";
import { IProductState } from "src/app/pharmacy-products/model/product-state";

export interface AppState {
  products: IProductState;
}

export const selectProducts = (state: AppState) => state.products;
export const selectProductsList = createSelector(selectProducts, (state: IProductState) => state.productsList);

