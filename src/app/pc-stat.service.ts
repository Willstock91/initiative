import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from './Constants';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class PcStatService {

  constructor(private http : HttpClient) { }

  getPcStat(id: String) {
    var url = Constants.API_URL + `/${id}`;
    return this.http.get(url)
                    .toPromise()
                    .then((result) => result)
                    .catch(this.catchError);
  }

  private catchError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
