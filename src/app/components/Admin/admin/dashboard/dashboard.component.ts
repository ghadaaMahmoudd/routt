// import { Component } from '@angular/core';
// import { ChartOptions, ChartType, ChartDataset } from 'chart.js';



// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent {
//   cards = [
//     { title: 'Total Sales', value: '58,458,35 L.E', icon: 'assets/icons/sales-icon.png' },
//     { title: 'Total Brand', value: '1540', icon: 'assets/icons/brand-icon.png' },
//     { title: 'Total Products', value: '1540', icon: 'assets/icons/products-icon.png' },
//     { title: 'Total Customer', value: '13,520', icon: 'assets/icons/customers-icon.png' },
//     { title: 'Total Order', value: '2540', icon: 'assets/icons/orders-icon.png' },
//   ];

//   stats = [
//     { title: 'Sales', value: 120, label: 10 },
//     { title: 'Users', value: 50, label: 10 },
//     { title: 'Revenue', value: '$10k', label: 10 },
//     { title: 'Growth', value: '12%', label: 10 }
//   ];


//   topBrands = [
//     { name: 'Nike', sales: 1000, orders: 10, rank: 3.4, profit: 10 },
//     { name: 'Adidas', sales: 800, orders: 10, rank: 3.4, profit: 10 },
//     { name: 'Puma', sales: 500, orders: 10, rank: 3.4, profit: 10 }
//   ];

//   public barChartOptions: ChartOptions<'bar'> = {
//     responsive: true,
//     scales: {
//       x: {
//         grid: {
//           display: false,

//         },
//         ticks: {

//         },
//       },
//       y: {
//         beginAtZero: true,

//       },
//     },
//     plugins: {
//       legend: {
//         display: false,
//       },

//     },

//   };



//   public barChartData: any =
//     {
//       labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//       datasets: [
//         {
//           data: [65, 59, 80, 81, 56, 55, 40, 90, 30, 55, 20, 100], label: 'Series A',
//           backgroundColor: '#F5CDAD',
//           borderRadius: 10,
//           barPercentage: 0.4,
//           categoryPercentage: 0.7
//         },
//       ],
//     }
//     ;

//   public barChartType: ChartType = 'bar';




//   progress: number = 50;
//   updateDashOffset(progress: number) {
//     const clamped = Math.min(Math.max(progress, 0), 100);
//     const filled = (clamped / 100) * 138.25;
//     return 138.25 - filled;
//   }


// }




import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

    // standalone:true,imports:[
    //       CommonModule,
    //       FormsModule,
    //       ReactiveFormsModule,
    //  ],
})
export class DashboardComponent {
  cards = [
    { title: 'Total Sales', value: '58,458,35 L.E', icon: 'assets/icons/sales-icon.png' },
    { title: 'Total Brand', value: '1540', icon: 'assets/icons/brand-icon.png' },
    { title: 'Total Products', value: '1540', icon: 'assets/icons/products-icon.png' },
    { title: 'Total Customer', value: '13,520', icon: 'assets/icons/customers-icon.png' },
    { title: 'Total Order', value: '2540', icon: 'assets/icons/orders-icon.png' },
  ];

  stats = [
    { title: 'Sales', value: 120, label: 10 },
    { title: 'Users', value: 50, label: 10 },
    { title: 'Revenue', value: '$10k', label: 10 },
    { title: 'Growth', value: '12%', label: 10 }
  ];

  topBrands = [
    { name: 'Nike', sales: 1000, orders: 10, rank: 3.4, profit: 10 },
    { name: 'Adidas', sales: 800, orders: 10, rank: 3.4, profit: 10 },
    { name: 'Puma', sales: 500, orders: 10, rank: 3.4, profit: 10 }
  ];

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          padding: 10,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  public barChartData: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40, 90, 30, 55, 20, 100],
        label: 'Series A',
        backgroundColor: '#F5CDAD',
        borderRadius: 10,
        barPercentage: 0.4, // Adjusts spacing between bars
        categoryPercentage: 0.7
      },
    ],
  };

  public barChartType: ChartType = 'bar';

  // Half-circle progress logic
  progress: number = 50;
  updateDashOffset(progress: number): number {
    const clamped = Math.min(Math.max(progress, 0), 100);
    const filled = (clamped / 100) * 138.25;
    return 138.25 - filled;
  }
}
