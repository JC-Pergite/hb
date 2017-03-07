import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Category } from '../../shared/category';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  template: `
  			<div>
  				<div *ngFor="let category of categories">
  					 <a [routerLink]="['./' + category.id]">{{category.name}}</a>
  					 <div *ngFor="let pic of category?.photos">
        	        <img src={{pic.photoUrl}} width="333" height="333" class="img-responsive" alt="Responsive image">
        	        </div>
  			   </div>
  			</div>		
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  categories: Category[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  	this.homeService.getPhotos().subscribe( categoriess => this.categories = categoriess)
  }

}

	// <div>
 //  				<div *ngFor="let type of categories | async">
 //  					<ul>{{type.name}}</ul>
  					// <div *ngFor="let pic of type?.photos">
 //  					 <a [routerLink]="['./category/' + pic.id]">
        	     	  // <img src={{pic.photoUrl}} width="333" height="333" class="img-responsive" alt="Responsive image">
 //        	   		 </a>
 //        	   		 	<div>
 //        	   		 		<h2>{{pic.comments}}</h2>
 //        	   		 	</div>	
 //        	   		</div> 
 //  			   </div>
 //  			</div>	