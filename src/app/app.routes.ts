import { Routes } from '@angular/router';
import { UnderMaintenanceComponent } from './pages/under-maintenance/under-maintenance.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Set as home for now
    { path: '**', redirectTo: '' } // Redirect all unknown routes here
];
