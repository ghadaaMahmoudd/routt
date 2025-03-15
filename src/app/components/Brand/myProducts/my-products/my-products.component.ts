import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  colors: string[];
  description: string;
  type: string;
}

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent {
  // products = [
  //   { name: '', image: '', price: '' , colors: [] },
  //   { name: '', image: '', price: '', colors: [] },
  //   { name: '', image: '', price: '', colors: [] },
  //   { name: '', image: '', price: '', colors: [] },
  // ];

  searchText: string = '';
  selectedProduct: Product | null = null;
  
  products: Product[] = [
    {
      id: 1,
      name: 'Coffee Mug',
      price: 50,
      image: 'assets/mug.png',
      colors: ['#000', '#fff', '#800080'],
      description: 'Stylish and durable coffee mug, perfect for daily use or gifting!',
      type: 'Mug'
    },
  ];

  filteredProducts() {
    return this.products.filter(p => p.name.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  showProductDetails(product: Product) {
    console.log('Selected Product:', product);
    this.selectedProduct = product;
  }

  closeModal() {
    this.selectedProduct = null;
  }

}
