import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from './user';

@Injectable() 
export class ProfileService {

  private userUrl = 'http://localhost:4200/app/users';

  constructor (private http: Http) { }

  getUsers(): Observable<any> {
    return this.http
      .get(this.userUrl)
      .map((res: Response) => <User>res.json().data || {} )
      .do(user => console.log(JSON.parse(JSON.stringify(user))))
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))  
  }

  getUser(id): Observable<any> {
    return this.http
      .get(this.userUrl) 
        .map(res => (<User[]>res.json().data).filter(user => user.id == id))
        .do(user => console.log(JSON.parse(JSON.stringify(user))))
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'))    
    }

}