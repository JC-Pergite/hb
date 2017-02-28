import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Photo } from '../../shared/photo';

@Injectable()
export class HomeService {

  	private photoUrl = 'http://localhost:4200/app/photos';

	constructor (private http: Http) {}

	getPhotos(): Observable<any> {
		return this.http
			.get(this.photoUrl)
			.map((res: Response) => <Photo>res.json().data || {} )
			.do(photo => console.log(JSON.parse(JSON.stringify(photo))))
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'))	
	}

	getPhoto(id): Observable<any> {
        return this.http
          .get(`${this.photoUrl}`) 
            .map(res => (<Photo[]>res.json().data).filter(photo => photo.id == id))
            .do(photo => console.log(JSON.parse(JSON.stringify(photo))))
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'))    
    }

}