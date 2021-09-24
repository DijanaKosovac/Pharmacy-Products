// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { ShellComponent } from './core/shell/shell.component';
import { ProductsOverviewComponent } from './pharmacy-products/products-overview/products-overview.component';
import { ProductDetailsComponent } from './pharmacy-products/product-details/product-details.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './pharmacy-products/store/products.reducers';
import { ProductsEffects } from './pharmacy-products/store/products.effects';
import { EffectsModule } from '@ngrx/effects';

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
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
