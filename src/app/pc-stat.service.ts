import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from './Constants';


@Injectable({
  providedIn: 'root'
})
export class PcStatService {

  constructor(private http : HttpClient) { }

  getPcStat(id: String) {
    var url = Constants.API_URL + `/${id}`;
    // return this.http.get(url)
    //                 .toPromise()
    //                 .then((result) => result)
    //                 .catch(this.catchError);
  }

  private catchError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
