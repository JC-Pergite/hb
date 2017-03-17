import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomeDetailsComponent } from './home/home-details.component';
import { HomeResolver } from './home/home.resolver';

import { PhotoDetailsComponent } from './photo/photo-details.component';
import { PhotoResolver } from './photo/photo.resolver';
import { PhotoComponent } from './photo/photo.component';

const mainRoutes: Routes = [
			
			{ path: 'category', 
				children: [
					{ path: '', component: HomeComponent },
					{ path: ':id', component: HomeDetailsComponent,
						resolve: {
							category: HomeResolver
						}							
					},
					{ path:':id/photo/:id', component: PhotoDetailsComponent }
				]
			}
		

];

export const mainRouting: ModuleWithProviders =
RouterModule.forChild(mainRoutes)