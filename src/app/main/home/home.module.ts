import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home.component';
import { HomeDetailsComponent } from './home-details.component';
import { mainRouting } from '../main.routing';
import { HomeService } from './home.service';

@NgModule ({
	imports: [ SharedModule, mainRouting ], 
	declarations: [ 
					HomeComponent,
					HomeDetailsComponent
				  ],
	providers: [ HomeService ]
})
export class HomeModule { }