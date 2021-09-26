import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsOverviewComponent } from './pharmacy-products/products-overview/products-overview.component';
import { ProductDetailsComponent } from './pharmacy-products/product-details/product-details.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: ProductsOverviewComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'products/overview' }

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
