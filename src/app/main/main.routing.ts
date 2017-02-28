import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const mainRoutes: Routes = [
			{path: 'home', component: HomeComponent}
];

export const mainRouting: ModuleWithProviders =
RouterModule.forChild(mainRoutes)