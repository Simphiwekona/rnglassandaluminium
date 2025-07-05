// home.component.ts
import { Component } from '@angular/core';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { Product } from '../../model/product.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../header/header.component";
import { ProjectsComponent } from "../../components/projects/projects.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [ProductCardComponent, CommonModule, HeaderComponent, ProjectsComponent, FooterComponent]
})
export class HomeComponent {
  products: Product[] = [
    {
      title: 'Windows',
      description: 'High-performance windows for energy efficiency and style.',
      link: '/windows'
    },
    {
      title: 'Doors',
      description: 'Modern aluminium doors for security and aesthetics.',
      link: '/doors'
    },
    {
      title: 'Mirrors & Glass',
      description: 'Custom glass solutions for any application.',
      link: '/mirrors-glass'
    },
    {
      title: 'Design Services',
      description: 'Expert advice for your interior and exterior spaces.',
      link: '/design'
    }
  ];
  
  certifications = [
    'AAAMSA Group',
    'South African Glass and Glazing Association (SAGGA)',
    'South African Glass Institute (SAGI)',
    'South African Bureau of Standards (SABS)'
  ];

  phoneNumber = '0710939931';
  message = 'Hello, I would like to inquire about your services';
  
  get whatsappLink() {
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
  }
}