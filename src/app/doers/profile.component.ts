import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ProfileService } from './profile.service';
import { User } from './user';
import { Album } from './album';

@Component({
  selector: 'app-profile',
  template: `
  			<div *ngFor="let info of user">
  				<h1>{{info.userName}}</h1>
  				<div *ngFor="let album of info?.albums">
  					<h2>Albums</h2>
  					<div id="albums">
  						<h3>{{album?.title}}</h3>
  						<ul *ngFor="let pic of album?.photos">
  							<li>
  								<h4>{{pic.name}}</h4>
  								<a [routerLink]="['./photo/' + pic.id]">
  									<img src={{pic.photoUrl}} width="333" height="333" />
  								</a>
  							</li>
  						</ul>	
  					</div>
  				</div>
  			</div>	
  `,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
	user: User;

	constructor(private profileService: ProfileService) {
		  	this.profileService.getUsers()
		  					   	.subscribe( 
		  					   		profile => { { this.user = profile }; { console.log(this.user); }; },
  					   				error => { console.log("Batsu! aka wrong"); }
		  								  )

	 }

	
}  