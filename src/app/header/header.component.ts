import { Component } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
isMenuOpen = false;

  constructor(public navService: NavigationService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
