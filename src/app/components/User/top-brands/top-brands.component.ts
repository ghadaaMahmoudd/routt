import { Component } from '@angular/core';

@Component({
  selector: 'app-top-brands',
  templateUrl: './top-brands.component.html',
  styleUrls: ['./top-brands.component.css']
})
export class TopBrandsComponent {

  brands = [
    { name: "Sweety", logo: "assets/Ellipse 6.png" },
    { name: "Fashionista", logo: "assets/Ellipse 6.png" },
    { name: "Elite", logo: "assets/Ellipse 6.png" },
    { name: "TrendSet", logo: "assets/Ellipse 6.png" }
  ];
}
