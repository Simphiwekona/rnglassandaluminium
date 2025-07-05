import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  images = [
    'assets/placeholder3.jpg', 
    'assets/placeholder5.jpg', 
    'assets/placeholder6.jpg', 
    'assets/placeholder9.jpg'
  ];

  getImageTitle(index: number): string {
    const titles = ['Windows', 'Doors', 'Mirrors & Glass', 'Design Services'];
    return titles[index] || 'Project';
  }
}