import { Component } from '@angular/core';
import { FavoritesService } from 'src/app/services/favourites.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  products = [
    {
      name: 'sunglasses',
      price: 150,
      originalPrice: 390,
      discount: 30,
      rating: 4,
      reviews: 58,
      favorited: false,
      image: 'assets/Rectangle 77.png'
    },
    {
      name: 'sunglasses',
      price: 150,
      originalPrice: 390,
      discount: 30,
      rating: 4,
      reviews: 58,
      favorited: false,
      image: 'assets/Rectangle 77.png'
    },
    {
      name: 'sunglasses',
      price: 150,
      originalPrice: 390,
      discount: 30,
      rating: 4,
      reviews: 58,
      favorited: false,
      image: 'assets/Rectangle 77.png'
    },
  ];

  constructor(private favoritesService: FavoritesService) {
    this.filteredProducts = this.allProducts;
  }

  toggleFavorite(product: any) {
    this.favoritesService.toggleFavorite(product);
  }

  getStars(rating: number): any[] {
    return Array(rating);
  }


filterText: string = '';

allProducts = [
  {
    name: 'sunglasses',
    price: 150,
    originalPrice: 390,
    discount: 30,
    rating: 4,
    reviews: 58,
    favorited: false,
    image: 'assets/Rectangle 77.png',
    isNew: false,
    isDiscounted: true,
  },
  {
    name: 'new glasses',
    price: 180,
    originalPrice: null,
    discount: null,
    rating: 5,
    reviews: 25,
    favorited: false,
    image: 'assets/Rectangle 77.png',
    isNew: true,
    isDiscounted: false,
  },
];

filterBy: string = 'all';
filteredProducts: any[] = [];

showFilterPanel = false;



toggleFilterPanel() {
  this.showFilterPanel = !this.showFilterPanel;
}

// 🛠 Filter by badge (all, new, discount)
filterByBadge(filterType: string) {
  this.filterBy = filterType;

  if (filterType === 'all') {
    this.filteredProducts = this.allProducts;
  } else if (filterType === 'new') {
    this.filteredProducts = this.allProducts.filter(product => product.isNew);
  } else if (filterType === 'discount') {
    this.filteredProducts = this.allProducts.filter(product => product.isDiscounted);
  }
}

}
