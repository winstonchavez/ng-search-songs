import { Component } from '@angular/core';
import { ExampleService } from './service/example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ ExampleService ]
})
export class AppComponent {

  //Alert object
  public alert = {
    "active" : false,
    "type" : null,
    "message" : null
  }

  //String to search
  public search : string = '';
  public tweets : any = null;
  public no_tweets : boolean = false;

  public songs : any;
  public no_songs : boolean = null;

  public loading : boolean = false;
  
  constructor ( private service : ExampleService ) {}


  /**
   * SearchByClick
   * 
   * Call api service across click event method
   * 
   * Params: key; type string, no optional.
   * Return: void
   */
  public SearchByClick ( key : string ) : void {

    if ( key == "" ) {
      this.alert.active = true;
      this.alert.type = "alert alert-primary";
      this.alert.message = "You must write something";
    } else {

      this.SearchTweet( key );

    }

  }
  /**
   * SearchTweet
   * 
   * Call api service
   * 
   * Params: key; type string, no optional.
   * Return: String
   */
  private SearchTweet ( key : string ) {

    this.service.search( key ).subscribe ( response => {

      this.alert.active = false;

      this.tweets = response;

      if ( this.tweets.length == 0 ) {

        this.no_tweets = true;

      } else {

        this.no_tweets = false;

      }

    }, error => {

      this.alert.active = true;
      this.alert.type = "alert alert-danger";
      this.alert.message = "Something went wrong. Sorry.";

    } );

  }

  private song ( key : string ) {

    this.loading = true;

    this.service.searchSong( key ).subscribe ( response => {

      this.alert.active = false;

      this.songs = response;

      if ( this.songs.tracks.items.length == 0 ) {

        this.no_songs = true;

      } else {

        this.no_songs = false;

        this.songs = this.songs.tracks.items;

      }

      this.loading = false;

    }, error => {

      this.loading = false;

      this.alert.active = true;
      this.alert.type = "alert alert-danger";
      this.alert.message = "Something went wrong. Sorry.";

    } );

  }

  /**
   * SearchSong
   */
  public SearchSong( key : string ) {

    if ( key == "" ) {
      this.alert.active = true;
      this.alert.type = "alert alert-primary";
      this.alert.message = "You must write something";
    } else {

      this.song( key );

    }
    
  }

}
