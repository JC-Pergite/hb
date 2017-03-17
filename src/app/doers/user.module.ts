import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { userRouting } from './user.routing';
import { LoginService } from './login.service';

import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';
import { ControlMessagesComponent } from './control-messages.component';
import { ProfileService } from './profile.service';
import { PhotoModule } from '../main/photo/photo.module';


@NgModule ({
	imports: [ SharedModule, userRouting, PhotoModule ], 
	declarations: [ 
					LoginComponent,
					ControlMessagesComponent,
					ProfileComponent					
				  ],
	providers: [ LoginService, ProfileService ]
})
export class UserModule { }