import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home.component';
import { HomeDetailsComponent } from './home-details.component';
import { mainRouting } from '../main.routing';
import { HomeService } from './home.service';

import { PhotoDetailsComponent } from '../photo/photo-details.component';
import { PhotoModule } from '../photo/photo.module';


@NgModule ({
	imports: [ SharedModule, mainRouting, PhotoModule ], 
	declarations: [ 
					HomeComponent,
					HomeDetailsComponent					
				  ],
	providers: [ HomeService ]
})
export class HomeModule { }