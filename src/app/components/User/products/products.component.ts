// import { Component, OnInit } from '@angular/core';
// import { UserProductsService } from 'src/app/services/user-products.service';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css']
// })
// export class ProductsComponent implements OnInit {
//   products = [
//     { name: 'Coffee Mug', description: 'Stylish ceramic coffee mug.', price: 60, image: 'assets/mug.jpg' },
//     { name: 'Coffee Mug', description: 'Stylish ceramic coffee mug.', price: 60, image: 'assets/mug.jpg' },
//     { name: 'Coffee Mug', description: 'Stylish ceramic coffee mug.', price: 60, image: 'assets/mug.jpg' },
//     { name: 'Coffee Mug', description: 'Stylish ceramic coffee mug.', price: 60, image: 'assets/mug.jpg' },
//     { name: 'Coffee Mug', description: 'Stylish ceramic coffee mug.', price: 60, image: 'assets/mug.jpg' },
//     { name: 'Coffee Mug', description: 'Stylish ceramic coffee mug.', price: 60, image: 'assets/mug.jpg' },
//     { name: 'Coffee Mug', description: 'Stylish ceramic coffee mug.', price: 60, image: 'assets/mug.jpg' },
//     { name: 'Coffee Mug', description: 'Stylish ceramic coffee mug.', price: 60, image: 'assets/mug.jpg' },
//     { name: 'Coffee Mug', description: 'Stylish ceramic coffee mug.', price: 60, image: 'assets/mug.jpg' }
//   ];




//  // products: any[] = [];
//   searchText = '';
//   visibleProducts = 6;

//   constructor(private productService: UserProductsService) {}

//   ngOnInit(): void {
//     this.fetchProducts();
//   }

//   fetchProducts(): void {
//     this.productService.getProducts().subscribe((data) => {
//       this.products = data;
//     });
//   }

//   get filteredProducts() {
//     return this.products.filter(product =>
//        product.name.toLowerCase().includes(this.searchText.toLowerCase())
//     );
//   }

//   loadMore() {
//     this.visibleProducts += 6;
//   }

//   selectedCategory: string = 'Best Sellers';

// setActiveCategory(category: string) {
//   this.selectedCategory = category;
// }

// }




// import { Component, OnInit } from '@angular/core';
// import { UserProductsService } from 'src/app/services/user-products.service';
// import { Router } from '@angular/router';
// import { CartService } from 'src/app/services/cart.service';

// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
//   quantity?: number;
// }

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css']
// })
// export class ProductsComponent implements OnInit {
//   products: Product[] = [];
//   searchText = '';
//   visibleProducts = 6;
//   selectedCategory: string = 'Best Sellers';

//   constructor(
//     private productService: UserProductsService,
//     private cartService: CartService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.fetchProducts();
//   }

//   fetchProducts(): void {
//     this.productService.getProducts().subscribe({
//       next: (data: Product[]) => {
//         this.products = data;
//       },
//       error: (err) => {
//         console.error('خطأ في تحميل المنتجات:', err);
//       }
//     });
//   }

//   get filteredProducts(): Product[] {
//     return this.products.filter(product =>
//       product.name.toLowerCase().includes(this.searchText.toLowerCase())
//     );
//   }

//   loadMore(): void {
//     this.visibleProducts += 6;
//   }

//   setActiveCategory(category: string): void {
//     this.selectedCategory = category;
//   }

//   addToCart(product: Product): void {
//     this.cartService.addToCart(product).subscribe({
//       next: () => {
//         console.log('تمت إضافة المنتج إلى الكارت');
//         this.router.navigate(['/cart']);
//       },
//       error: (err) => {
//         console.error('خطأ أثناء الإضافة إلى الكارت:', err);
//       }
//     });
//   }
// }



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity?: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Coffee Mug',
      description: 'Stylish ceramic coffee mug.',
      price: 60,
      image: 'https://via.placeholder.com/300x200.png?text=Coffee+Mug'
    },
    {
      id: 2,
      name: 'T-Shirt',
      description: 'Comfortable cotton t-shirt.',
      price: 120,
      image: 'https://via.placeholder.com/300x200.png?text=T-Shirt'
    },
    {
      id: 3,
      name: 'Notebook',
      description: 'Hardcover ruled notebook.',
      price: 35,
      image: 'https://via.placeholder.com/300x200.png?text=Notebook'
    },
    {
      id: 4,
      name: 'Pen Set',
      description: 'Luxury metal pen set.',
      price: 45,
      image: 'https://via.placeholder.com/300x200.png?text=Pen+Set'
    }
  ];

  searchText = '';
  visibleProducts = 6;
  selectedCategory: string = 'Best Sellers';

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  get filteredProducts(): Product[] {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  loadMore(): void {
    this.visibleProducts += 6;
  }

  setActiveCategory(category: string): void {
    this.selectedCategory = category;
  }

  // addToCart(product: Product): void {
  //   console.log('تمت إضافة المنتج إلى الكارت (مؤقتاً)', product);
  //   this.router.navigate(['/cart']); // أو تقدر تشيلها مؤقتاً لو مش عامل كارت
  // }




addToCart(product: Product): void {
  const cartItem: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  } = {
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1,
    image: product.image
  };

  this.cartService.addToCart(cartItem).subscribe({
    next: () => {
      console.log('✔️ تم الإضافة');
      this.router.navigate(['/cart']);
    },
    error: err => {
      console.error('❌ خطأ أثناء الإضافة:', err);
    }
  });
}

}
