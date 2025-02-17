import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviews = [
    {
      name: "Basma Badr", 
      rating: 5,
      feedback: "Fast delivery and excellent product quality! I'm beyond satisfied with my purchase."
    },
    {
      name: "John Doe",
      rating: 4,
      feedback: "Great quality, but delivery took a bit longer than expected."
    }
  ];
}


