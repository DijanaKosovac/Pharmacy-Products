import { environment } from '../environments/environment';
// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { ShellComponent } from './core/shell/shell.component';
import { ProductsOverviewComponent } from './pharmacy-products/products-overview/products-overview.component';
import { ProductDetailsComponent } from './pharmacy-products/product-details/product-details.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './pharmacy-products/store/products.reducers';
import { ProductsEffects } from './pharmacy-products/store/products.effects';
// Services
import { ProductsService } from './pharmacy-products/products.service';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ShellComponent,
    ProductsOverviewComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    StoreModule.forRoot({
      products: productReducer

    }),
    EffectsModule.forRoot([
      ProductsEffects,

    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
  ],
  providers: [ProductsService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
