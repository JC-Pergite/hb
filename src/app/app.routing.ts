import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  	{ path: '', redirectTo: 'category', pathMatch: 'full' },
  	{ path: '', redirectTo: 'login', pathMatch: 'full' },
  	{ path: '', redirectTo: 'profile', pathMatch: 'full' }
  	
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);