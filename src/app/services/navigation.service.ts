import { Injectable } from '@angular/core';

interface NavItem {
  label: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
 navItems: NavItem[] = [
    { label: 'Home', link: '/' },
    { label: 'Windows', link: '/windows' },
    { label: 'Doors', link: '/doors' },
    { label: 'Mirrors & Glass', link: '/mirrors-glass' },
    { label: 'Design', link: '/design' },
    { label: 'Refurbishment', link: '/refurbishment' },
    { label: 'Contact', link: '/contact' }
  ];
  constructor() { }
}
