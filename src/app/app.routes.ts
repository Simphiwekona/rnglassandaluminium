import { Routes } from '@angular/router';
import { UnderMaintenanceComponent } from './pages/under-maintenance/under-maintenance.component';

export const routes: Routes = [
    { path: '', component: UnderMaintenanceComponent }, // Set as home for now
    { path: '**', redirectTo: '' } // Redirect all unknown routes here
];
