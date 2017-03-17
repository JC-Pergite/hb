import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';

import { HomeService } from '../home/home.service';
import { Photo } from '../../shared/photo';
import { Comment } from '../../shared/comment';

import { Category } from '../../shared/category';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-photo-details',
  template: `
  	   <div>
                 <a [routerLink]="['/category']">Casa</a>
                 </div>

          <div *ngFor="let pic of photos">
            <ul><h2>{{pic.type}}</h2>
              <li>{{pic.name}}</li>
              <img src={{pic.photoUrl}} width="333" height="333" class="img-responsive" alt="Responsive image">
                      <h2>{{pic.comments}}</h2>
                      <input type="text" placeholder="Comment.." #newComment />
                      <button role="button" (click)="addComment(pic, newComment.value); newComment.value=''">
                       Add Comment
                   </button>



            </ul>
           </div>
  `  
})
export class PhotoDetailsComponent implements OnInit { 
	
  commentss: Comment[] = [];
  photo: Photo;
    photos: Photo[];

  private id: number;


  constructor(private route: ActivatedRoute, private homeService: HomeService) { }

  ngOnInit() {  


    this.seePhoto(); } 

  seePhoto() {

             this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.homeService
          .getPhoto(id)
          .subscribe(pic => this.photos = pic);
      });

                      // console.log(this.photo);


  }

	addComment(pic, comment){
				let yo = new Comment(this.id, comment)
		 let comentarios = pic.comments;
      this.commentss.push(comment);
      comentarios.push(comment);


      this.homeService.newComment(this.commentss)
          .subscribe(data => {  this.cat = data },
                    error => { console.log("Batsu!"); })
                  
            


  }

}