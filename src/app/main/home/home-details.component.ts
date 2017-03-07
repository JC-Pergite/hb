import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';

import { HomeService } from './home.service';
import { Photo } from '../../shared/photo';
import { Comment } from '../../shared/comment';

import { Category } from '../../shared/category';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home-details',
  template: `
  	<div>
  	  					 <a [routerLink]="['/category']">Home</a>
  	  					 </div>

    			    <div *ngFor="let type of category">
  				<h2>{{type.name}}</h2>
  				<div *ngFor="let pic of type?.photos">
  					<ul><h1>{{pic.type}}</h1>
  						<li>{{pic.name}}</li>
  						<img src={{pic.photoUrl}} width="333" height="333" class="img-responsive" alt="Responsive image">
        	   		 		<h2>{{pic.comments}}</h2>
        	   		 		<input type="text" placeholder="Comment.." #newComment />
        	   		 		<button role="button" (click)="addComment(pic, newComment.value); newComment.value=''">
          						 Add Comment
       						</button>



  					</ul>
  			   </div>
  			</div>	
  `
  // styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit { //look up nested resolver: /food/french/:id
														//possibly replace id with name aka french
  
  category: Category;
  cat: Photo;
  // photo: Array<Comment[]>;
 commentss: Comment[] = [];
  	photo: Photo[];
    private id: number;


  

  constructor(private route: ActivatedRoute, private homeService: HomeService) { }

  	ngOnInit() { this.getPhoto(); }

	getPhoto() {
		
		this.category = this.route.snapshot.data['category'];
	}

	addComment(pic, comment){
				// let fuckit = new Comment(this.id, comment)
		 let comentarios = pic.comments;
      // this.commentss.push(comment);
      comentarios.push(comment);


      this.homeService.newComment(pic)
          .subscribe(data => {  this.cat = data },
                    error => { console.log("Batsu!"); })
                  
                		console.log(pic)
      		// console.log(comentarios)
      		      		// console.log(this.cat)


  }

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
