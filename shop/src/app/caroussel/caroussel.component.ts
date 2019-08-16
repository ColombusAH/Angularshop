import { Product } from './../../models/product';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css']
})
export class CarousselComponent implements OnInit, OnDestroy {
  @Input() productList: Product[];
  currentProductIndex: number = 0;
  currentProduct: Product;
  intervalId: NodeJS.Timer;
  currentState: string = 'init';

  setNextProduct() {}
  constructor() {}

  ngOnInit() {
    this.currentProduct = this.productList[0];
    this.intervalId = setInterval(() => {
      this.currentProduct = this.productList[this.currentProductIndex];
      this.currentState = 'init';
      this.currentProductIndex++;
      this.currentProductIndex =
        this.currentProductIndex % this.productList.length;
      this.currentState = 'mounted';
    }, 2000);
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
