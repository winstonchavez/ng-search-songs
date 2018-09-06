import { Component, OnInit } from '@angular/core';
import { NgSongsService } from './ng-songs.service';

@Component({
  selector: 'app-ng-songs',
  templateUrl: './ng-songs.component.html',
  styleUrls: ['./ng-songs.component.css'],
  providers: [ NgSongsService ]
})
export class NgSongsComponent implements OnInit {

  public songs : any;

  constructor( private service : NgSongsService ) { }

  ngOnInit() {
  }

  private song ( key : string ) {

    this.service.searchSong( key ).subscribe ( response => {

      this.songs = response;

      if ( this.songs.tracks.items.length == 0 ) {

        this.songs = [];

      } else {
        this.songs = this.songs.tracks.items;
      }

    }, error => {

      console.log (error);

    } );

  }

  /**
   * SearchSong
   */
  public SearchSong( key : string ) {

    if ( key == "" ) {
      console.log("Key not has empty");
    } else {

      this.song( key );

    }
    
    setTimeout(()=>{    
      return this.songs;
    }, 3000);

  }

}
