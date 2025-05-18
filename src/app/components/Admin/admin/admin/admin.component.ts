import { Component } from '@angular/core';
 import { SidebarComponent } from '../sidebar/sidebar.component';
 import { HeaderComponent } from '../header/header.component';
import { FilterComponent } from '../filter/filter.component';
import{Router, RouterOutlet}from'@angular/router';


import { filter } from 'rxjs';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  standalone:true,imports:[
    SidebarComponent,
    HeaderComponent,
    FilterComponent,
    RouterOutlet,

  ],
})
export class AdminComponent {

}
