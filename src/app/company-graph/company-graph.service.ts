import { Injectable } from '@angular/core'
import {Http, Headers, RequestOptions,Response} from '@angular/http';

import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";  

@Injectable()

export class CompanyGraphService{
   constructor(private http:Http){}


  private clientUrl = './assets/testdata.json';

  private headers = new Headers({ 'Accept': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  getTestData() : Observable<any>{
    return this.http.get(this.clientUrl, this.options)
      .map((response :Response) => response.json());
  }

}