import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favourites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteProducts: any[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.favoriteProducts = this.favoritesService.getFavorites();
  }

  toggleFavorite(product: any) {
    this.favoritesService.toggleFavorite(product);
    this.favoriteProducts = this.favoritesService.getFavorites();
  }

  getStars(rating: number): any[] {
    return Array(rating);
  }
}
