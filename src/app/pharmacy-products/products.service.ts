import { IProduct } from 'src/app/shared/models/product';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private fireStoreService: AngularFirestore) { }

  getProducts(): Observable<IProduct[]> {
    return this.fireStoreService.collection("Products").snapshotChanges().pipe(
      map(action => {
        return action.map(
          item => ({
            id: item.payload.doc.id,
            ...item.payload.doc.data() as {}
          } as IProduct)
        )
      })
    );
  }

  getProduct(productId: string): Observable<IProduct> {
    return this.fireStoreService.collection("Products").doc(productId).get().pipe(
      map(action => {
        let product = new IProduct(action.data());
        return product;
      })
    )
  }

  updateProduct(productId: string, product: IProduct) {
    let promise = this.fireStoreService.doc("Products/" + productId).update(Object.assign({}, product));
    return from(promise).pipe(
      map(data => {
        return data;
      })
    )
  }

  saveNewProduct(product: IProduct) {
    let promise = this.fireStoreService.collection("Products").add(Object.assign({}, product));
    return from(promise).pipe(
      map(data => {
        return data;
      })
    )
  }

  deleteProduct(productId: string): Observable<void> {
    let promise = this.fireStoreService.collection("Products").doc(productId).delete();
    return from(promise).pipe(
      map(data => {
        return data;
      })
    )
  }
}
