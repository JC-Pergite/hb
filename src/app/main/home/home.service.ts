import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Category } from '../../shared/category';
import { Photo } from '../../shared/photo';
import { Comment } from '../../shared/comment';



@Injectable()
export class HomeService {

  	private photoUrl = 'http://localhost:4200/app/categories';
  	  	private picUrl = 'http://localhost:4200/app/photos';


	constructor (private http: Http) {}

	getPhotos(): Observable<any> {
		return this.http
			.get(this.photoUrl)
			.map((res: Response) => <Category>res.json().data || {} )
			.do(category => console.log(JSON.parse(JSON.stringify(category))))
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'))	
	}

	getPhoto(id): Observable<any> {
        return this.http
          .get(this.photoUrl) 
            .map(res => (<Category[]>res.json().data).filter(category => category.id == id))
            .do(category => console.log(JSON.parse(JSON.stringify(category))))
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'))    
    }

    newComment (comment): Observable<any> {

      let body = JSON.parse(JSON.stringify(comment));
      let headers    = new Headers({ 'Content-Type': 'application/json' }); 
      let options    = new RequestOptions({ headers: headers });

      return this.http
        .post(this.photoUrl, body, options)
        .map((res:Response) => res.json().data as Category) 
        .do(category => console.log(JSON.parse(JSON.stringify(category))))
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}