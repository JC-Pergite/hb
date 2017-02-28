import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Photo } from '../../shared/photo';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  template: `
  			<div>
  				<div *ngFor="let pic of photos | async">
  					<ul>
  						<li>Hey</li>
  						<li> {{pic?.name}}</li>
  					</ul>
  				</div>
  			</div>		
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  photos: Observable<Photo>;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  	this.photos = this.homeService.getPhotos();
  }

}
