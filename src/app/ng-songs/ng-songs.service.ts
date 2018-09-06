import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NgSongsService {

  constructor(private http: HttpClient) { }

  public searchSong ( key : string ) {

    let url : string = 'https://platzi-music-api.now.sh/search/?q=' + key + '&type=track';

    return this.http.get( url );

  }

}
