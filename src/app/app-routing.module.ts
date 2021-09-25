import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsOverviewComponent } from './pharmacy-products/products-overview/products-overview.component';

const routes: Routes = [
  { path: '', redirectTo: '/products/overview', pathMatch: 'full' },
  { path: 'products-overview', component: ProductsOverviewComponent },

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
