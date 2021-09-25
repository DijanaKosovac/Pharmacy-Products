import { IProduct } from "src/app/shared/models/product";

export interface IProductState {
  productsList: IProduct[];
  product: IProduct;
}
