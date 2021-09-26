import { IProduct } from 'src/app/shared/models/product';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Chart, registerables } from 'chart.js';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GET_PRODUCTS } from '../pharmacy-products/store/products.actions';
import { AppState, selectProductsList } from '../shared/store/state';

@Component({
  selector: 'phar-statistics',
  templateUrl: './statistics.component.html'
})
export class StatisticsComponent implements OnInit {
  products: IProduct[] = [];
  manufacturersInfo: any[] = []
  ngUnsubscribe: Subject<any> = new Subject();
  productPriceChart: Chart;
  manufacturerNamesChart: Chart;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getProductList();
  }

  ngOnDestroy() {
    this.productPriceChart.destroy();
    this.manufacturerNamesChart.destroy();
  }

  getProductList() {
    this.store.select(selectProductsList).pipe(takeUntil(this.ngUnsubscribe)).subscribe(products => {
      if (products.length === 0) {
        this.store.dispatch(GET_PRODUCTS());
      }
      this.products = products;
      products.forEach(elem => {
        let foundElement = this.manufacturersInfo.find(item => item.name === elem.manufacturer.name);
        if (foundElement !== undefined) {
          this.manufacturersInfo.map((item, index) => {
            if (item.name === elem.manufacturer.name) {
              this.manufacturersInfo[index].count++;
            }
          })
        } else {
          this.manufacturersInfo.push({
            name: elem.manufacturer.name,
            count: 1,
          });
        }
      })
      if (this.products.length) {
        Chart.register(...registerables);
        this.createProductPriceChart();
        this.createManufacturerNamesChart();
      }
    });
  }


  createProductPriceChart() {
    this.productPriceChart = new Chart("productPriceChart", {
      type: 'bar',
      data: {
        labels: this.products.map(item => item.name),
        datasets: [{
          label: '',
          data: this.products.map(item => item.price),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createManufacturerNamesChart() {
    this.manufacturerNamesChart = new Chart("manufacturerNamesChart", {
      type: 'pie',
      data: {
        labels: this.manufacturersInfo.map(item => item.name),
        datasets: [{
          label: '# of Votes',
          data: this.manufacturersInfo.map(item => item.count),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}


