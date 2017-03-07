import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomeDetailsComponent } from './home/home-details.component';
import { HomeResolver } from './home/home.resolver';

// import { PhotoDetailsComponent } from '../photos/photo-details.component';
// import { PhotoResolver } from '../photos/photo.resolver';

const mainRoutes: Routes = [
			{ path: 'category', component: HomeComponent },
			{ path: 'category/:id', component: HomeDetailsComponent,
				resolve: {
							category: HomeResolver
						 } // erase once photoComponent and resolver are created
					// 	 },
					// children: 
					// 			{ path: '', component: PhotoDetailsComponent,
					// 				resolve: {
					// 							subscribers: 'PhotoResolver'
					// 						 }
					// 			}			 
					// 		  ]
			}
];

export const mainRouting: ModuleWithProviders =
RouterModule.forChild(mainRoutes)