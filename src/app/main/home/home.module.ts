import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home.component';
import { mainRouting } from '../main.routing';
import { HomeService } from './home.service';

@NgModule ({
	imports: [ mainRouting, SharedModule ], 
	declarations: [ 
					HomeComponent
				  ],
	providers: [ HomeService ]
})
export class HomeModule { }