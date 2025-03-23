import { Component } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent {
  
  salesProducts = [
    { name: 'Sunglasses', brand: 'Brand Name', price: '$10.4', image: 'assets/sunglasses.jpg', rating: 5, reviews: 58, discount: '-30%' },
    { name: 'Sunglasses', brand: 'Brand Name', price: '$10.4', image: 'assets/sunglasses.jpg', rating: 5, reviews: 58, discount: '-30%' },
    { name: 'Sunglasses', brand: 'Brand Name', price: '$10.4', image: 'assets/sunglasses.jpg', rating: 5, reviews: 58, discount: '-30%' },
    { name: 'Sunglasses', brand: 'Brand Name', price: '$10.4', image: 'assets/sunglasses.jpg', rating: 5, reviews: 58, discount: '-30%' }
  ];

  bestSellingProducts = [
    { name: 'Sunglasses', brand: 'Brand Name', price: '$10.4', image: 'assets/sunglasses.jpg', rating: 5, reviews: 58 },
    { name: 'Sunglasses', brand: 'Brand Name', price: '$10.4', image: 'assets/sunglasses.jpg', rating: 5, reviews: 58 },
    { name: 'Sunglasses', brand: 'Brand Name', price: '$10.4', image: 'assets/sunglasses.jpg', rating: 5, reviews: 58 },
    { name: 'Sunglasses', brand: 'Brand Name', price: '$10.4', image: 'assets/sunglasses.jpg', rating: 5, reviews: 58 }
  ];

  newArrivals = [
    {
      name: "Water bottle",
      description: "High quality thermal bottle",
      image: "assets/Rectangle 78.png",
      gridPosition: "1 / 1"
    },
    {
      name: "T-shirt",
      description: "100% cotton summer t-shirt",
      image: "assets/Rectangle 79.png",
      gridPosition: "1 / 2"
    },
    {
      name: "glasses",
      description: "High quality sunglasses",
      image: "assets/Rectangle 80.png",
      gridPosition: "2 / 2"
    },
    {
      name: "Mobile",
      description: "iPhone xs max",
      image: "assets/Rectangle 81.png",
      gridPosition: "1 / 3"
    }
  ];
  
}
