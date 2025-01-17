import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MenuItem } from '@Interfaces/index';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private location = inject(Location);
  menuItems: MenuItem[] = [
    {
      path: '/home',
      label: 'Home',
      icon: 'fas fa-home',
    },
    {
      path: '/circular-chart',
      label: 'Circular Chart',
      icon: 'fas fa-chart-pie',
    },
    {
      path: '/line-chart',
      label: 'Line Chart',
      icon: 'fas fa-chart-line',
    },
    {
      path: '/bar-chart',
      label: 'Bar Chart',
      icon: 'fas fa-chart-simple',
    },
  ];
  currentPath = () => this.location.path();
}
