import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Resolve, ActivatedRouteSnapshot, 
		 RouterStateSnapshot, Router } from '@angular/router';

import { HomeService } from './home.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeResolver implements Resolve<any> {

  constructor(private homeService: HomeService, 
  			  private router: Router, private http: Http) { }
  
  resolve(route: ActivatedRouteSnapshot): Observable<any> { 
  	let id = route.params['id'];
    return this.homeService.getCategory(id)
  }
  
}