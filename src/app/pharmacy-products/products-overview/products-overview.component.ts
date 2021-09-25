import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'phar-products-overview',
  templateUrl: './products-overview.component.html',
})
export class ProductsOverviewComponent implements OnInit {
  products = [
    {
      name: 'Paracetamol',
      manufacturer: 'Galenika',
      price: '50e',
      expiryDate: '15.10.2025'
    },
    {
      name: 'Paracetamol',
      manufacturer: 'Galenika',
      price: '50e',
      expiryDate: '15.10.2025'
    },
    {
      name: 'Paracetamol',
      manufacturer: 'Galenika',
      price: '50e',
      expiryDate: '15.10.2025'
    },
    {
      name: 'Paracetamol',
      manufacturer: 'Galenika',
      price: '50e',
      expiryDate: '15.10.2025'
    },
    {
      name: 'Paracetamol',
      manufacturer: 'Galenika',
      price: '50e',
      expiryDate: '15.10.2025'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
