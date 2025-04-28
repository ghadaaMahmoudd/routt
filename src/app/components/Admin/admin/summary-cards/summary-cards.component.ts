import { Component } from '@angular/core';

@Component({
  selector: 'app-summary-cards',
  templateUrl: './summary-cards.component.html',
  styleUrls: ['./summary-cards.component.css']
})
export class SummaryCardsComponent {
  cards = [
    { title: 'Total Sales', value: '58,458.35 L.E', icon: 'bi bi-bar-chart' },
    { title: 'Total Brand', value: '1540', icon: 'bi bi-briefcase' },
    { title: 'Total Products', value: '1540', icon: 'bi bi-grid' },
    { title: 'Total Customer', value: '13,520', icon: 'bi bi-people' },
    { title: 'Total Order', value: '2540', icon: 'bi bi-file-text' }]}

