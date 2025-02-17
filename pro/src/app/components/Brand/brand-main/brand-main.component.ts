import { Component } from '@angular/core';

@Component({
  selector: 'app-brand-main',
  templateUrl: './brand-main.component.html',
  styleUrls: ['./brand-main.component.css']
})
export class BrandMainComponent {
  // Subscribtion
  statistics = [
    { title: 'Total number of sales', value: '3500', change: 35.5, icon: '📈' },
    { title: 'Total number of Costs', value: '1500', change: -15.2, icon: '💰' },
    { title: 'Total number of Profits', value: '18000 L.E', change: 10.5, icon: '💵' }
  ];

  copyCode() {
    const inputField = document.getElementById('inviteCode') as HTMLInputElement;
    inputField.select();
    navigator.clipboard.writeText(inputField.value);
    alert('Invitation Code Copied!');
  }
  // Bar Chart (Orders)
  barChartOptions = {
    title: { text: 'Orders', left: 'center' },
    tooltip: {},
    xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] },
    yAxis: { type: 'value' },
    series: [{ name: 'Orders', type: 'bar', data: [500, 700, 800, 1200, 1500, 1800, 2200, 2400, 2600, 2800, 3000, 3200], color: '#FFA266' }]
  };

  // Line Chart (Profit)
  lineChartOptions = {
    title: { text: 'Profit', left: 'center' },
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] },
    yAxis: { type: 'value' },
    series: [{ name: 'Profit', type: 'line', smooth: true, data: [5000, 7000, 8000, 9000, 11000, 13000, 14000, 16000, 17000, 18000, 15000, 12000], color: '#FF8C42', areaStyle: {} }]
  };
}
