import { Component } from '@angular/core';

@Component({
  selector: 'app-top-brands',
  templateUrl: './top-brands.component.html',
  styleUrls: ['./top-brands.component.css']
})
export class TopBrandsComponent {

  brands = [
    { name: "Sweety", image: "assets/Ellipse 6.png" },
    { name: "Fashionista", image: "assets/Ellipse 6.png" },
    { name: "Elite", image: "assets/Ellipse 6.png" },
    { name: "TrendSet", image: "assets/Ellipse 6.png" }
  ];
}
