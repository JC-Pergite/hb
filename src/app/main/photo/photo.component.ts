import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';

import { HomeService } from '../home/home.service';
import { Photo } from '../../shared/photo';
import { Comment } from '../../shared/comment';

import { Category } from '../../shared/category';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-photo',
  template: `
              <div>
                <h1> There's ZILCH Here..</h1>
              </div>  
  `
  // styleUrls: ['./home-details.component.css']
})
export class PhotoComponent { 
													
         
 //  category: Observable<Category>;
 //  cat: Photo;
 //  // photo: Array<Comment[]>;
 //  commentss: Comment[] = [];
 //  photo: Photo[];
 //  private id: number;
 //  thisPhoto: any; 


  

 //  constructor(private route: ActivatedRoute, private homeService: HomeService) { this.homeService.getPhotos()}

 //  ngOnInit() { this.getPhotos(); }

	// getPhotos() {
		
	// 	this.category = this.homeService.getPhotos();
	// }


}

  					// <div *ngFor="let pic of type?.photos">
  					//  <a class="media-left" href="#">
       //  	     	  <img src={{pic.photoUrl}} width="333" height="333" class="img-responsive" alt="Responsive image">
       //  	   		 </a>
       //  	   		</div> 

     //   <div *ngFor="let type of category">
  			// 	<h2>{{type.name}}</h2>
  			// 	<div *ngFor="let pic of type?.photos">
  			// 		<ul>
  			// 			<li>Hey</li>
  			// 			<li>{{pic.type}}</li>
  			// 		</ul>
  			//    </div>
  			// </div>	


    //       <div>
    //              <a [routerLink]="['/category']">Casa</a>
    // </div>

    //           <div *ngFor="let type of category">
        
    //       <div *ngFor="let pic of type?.photos">
          
    //        </div>
    //     </div>  
