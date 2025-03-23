import { Component, OnInit } from '@angular/core';
import { UserProductsService } from 'src/app/services/user-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [
    { name: 'Coffee Mug', description: 'Stylish ceramic coffee mug.', price: 60, image: 'assets/mug.jpg' },
    { name: 'Coffee Mug', description: 'Stylish ceramic coffee mug.', price: 60, image: 'assets/mug.jpg' },
    { name: 'Coffee Mug', description: 'Stylish ceramic coffee mug.', price: 60, image: 'assets/mug.jpg' },
    { name: 'Coffee Mug', description: 'Stylish ceramic coffee mug.', price: 60, image: 'assets/mug.jpg' },
    { name: 'Coffee Mug', description: 'Stylish ceramic coffee mug.', price: 60, image: 'assets/mug.jpg' },
    { name: 'Coffee Mug', description: 'Stylish ceramic coffee mug.', price: 60, image: 'assets/mug.jpg' },
    { name: 'Coffee Mug', description: 'Stylish ceramic coffee mug.', price: 60, image: 'assets/mug.jpg' },
    { name: 'Coffee Mug', description: 'Stylish ceramic coffee mug.', price: 60, image: 'assets/mug.jpg' },
    { name: 'Coffee Mug', description: 'Stylish ceramic coffee mug.', price: 60, image: 'assets/mug.jpg' }
  ];
  



 // products: any[] = [];
  searchText = '';
  visibleProducts = 6;

  constructor(private productService: UserProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  get filteredProducts() {
    return this.products.filter(product =>
       product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  loadMore() {
    this.visibleProducts += 6;
  }

  selectedCategory: string = 'Best Sellers';

setActiveCategory(category: string) {
  this.selectedCategory = category;
}

}
