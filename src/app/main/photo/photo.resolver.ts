import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Resolve, ActivatedRouteSnapshot, 
		 RouterStateSnapshot, Router } from '@angular/router';

import { HomeService } from '../home/home.service';
import { Observable } from 'rxjs/Observable';
import { Photo } from '../../shared/photo';
import { Category } from '../../shared/category';

@Injectable()
export class PhotoResolver implements Resolve<any> {

	photos: Photo[]
  constructor(private homeService: HomeService, 
  			  private router: Router, private http: Http) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<any> { 
  	  	this.homeService.getPhotos().subscribe( photoss => this.photos = photoss)

  		let id = route.params['id'];
   		return this.homeService.getPhoto(id)
  }
  
}