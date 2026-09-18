import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [

//Vazio
{path:'', redirectTo: '/dashboard', pathMatch: 'full'},
//Login
{path:'dashboard', component: DashboardComponent, data: { nome: 'Login' }}

];
