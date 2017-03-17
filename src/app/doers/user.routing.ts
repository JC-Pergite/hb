import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';
import { PhotoDetailsComponent } from '../main/photo/photo-details.component';


const userRoutes: Routes = [
			{ path: 'login', component: LoginComponent },
			{ path: 'profile', 
				children: [
					{ path: '', component: ProfileComponent }, 
					{ path: 'photo/:id', component: PhotoDetailsComponent }
				]
			}		
];
export const userRouting: ModuleWithProviders =
RouterModule.forChild(userRoutes)