import { Component } from '@angular/core';

@Component({
  selector: 'app-top-brand',
  templateUrl: './top-brand.component.html',
  styleUrls: ['./top-brand.component.css']
})
export class TopBrandComponent {
  topBrands = [
    { name: 'Nike', sales: 1000,orders:10,rank:3.4,profit:10 },
    { name: 'Adidas', sales: 800 ,orders:10,rank:3.4,profit:10},
    { name: 'Puma', sales: 500,orders:10,rank:3.4,profit:10 }
  ];
}
