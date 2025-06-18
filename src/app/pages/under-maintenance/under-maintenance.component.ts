import { Component } from '@angular/core';

@Component({
  selector: 'app-under-maintenance',
  standalone: true,
  imports: [],
  templateUrl: './under-maintenance.component.html',
  styleUrl: './under-maintenance.component.scss'
})
export class UnderMaintenanceComponent {
  lastUpdated = new Date();
}
