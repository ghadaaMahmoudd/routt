import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories = [
    { name: 'Skin Care', image: 'assets/Ellipse 1.png' },
    { name: 'Clothes', image: 'assets/Ellipse 1 (1).png' },
    { name: 'Accessories', image: 'assets/Ellipse 1 (2).png' },
    { name: 'Hand Made', image: 'assets/Ellipse 1 (3).png' },
    { name: 'Other Products', image: 'assets/Ellipse 1 (4).png' },
  ];
  

}
