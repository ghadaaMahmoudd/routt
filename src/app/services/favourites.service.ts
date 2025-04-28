import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: any[] = [];

  getFavorites() {
    return this.favorites;
  }

  addToFavorites(product: any) {
    if (!this.favorites.find(p => p.name === product.name)) {
      this.favorites.push(product);
    }
  }

  removeFromFavorites(product: any) {
    this.favorites = this.favorites.filter(p => p.name !== product.name);
  }

  toggleFavorite(product: any) {
    const exists = this.favorites.find(p => p.name === product.name);
    if (exists) {
      this.removeFromFavorites(product);
      product.favorited = false;
    } else {
      this.addToFavorites(product);
      product.favorited = true;
    }
  }
}
