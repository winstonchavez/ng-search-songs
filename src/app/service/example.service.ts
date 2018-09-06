import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor( private http: HttpClient ) { }

  /**
   * search
   * 
   * Params: key; type string, no optional.
   */

  public search ( key : string ) {

    let url : string =  environment.apiUrl + 'comments?email=' + key;

    return this.http.get( url );

  }

  public searchSong ( key : string ) {

    let url : string =  environment.music + '?q=' + key + '&type=track';

    return this.http.get( url );

  }

}
