import { IProduct } from 'src/app/shared/models/product';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private fireStoreService: AngularFirestore) { }

  saveNewProduct(product: IProduct) {
    let id = this.fireStoreService.createId();
    product.manufacturer.id = id;
    return this.fireStoreService.collection('Products').add(Object.assign({}, product)).then(function (res) {
      return res;
    })
  }

  getProducts(): Observable<IProduct[]> {
    return this.fireStoreService.collection("Products").snapshotChanges().pipe(
      map(action => {
        return action.map(
          c => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data() as {}
          } as IProduct)
        )
      })
    );
  }

  deleteProduct(productId: string) {
    return this.fireStoreService.collection("Products").doc(productId).delete();
  }

  getProduct(productId: string) {
    return this.fireStoreService.collection("Products").doc(productId).get()
  }
}
