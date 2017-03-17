import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { mainRouting } from '../main.routing';
import { HomeService } from '../home/home.service';

import { PhotoDetailsComponent } from './photo-details.component';

@NgModule ({
	imports: [ SharedModule, mainRouting ], 
	declarations: [ 
					PhotoDetailsComponent
				  ],
	providers: [ HomeService ]
})
export class PhotoModule { }

