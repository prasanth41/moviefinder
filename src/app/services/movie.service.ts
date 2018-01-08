import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
  apikey: string;
  searchStr: string;


  constructor(private _jsonp: Jsonp) {
    this.apikey = 'd73a9714a43b8b35268d68285a79b4c6';
    console.log("Movieservice is intialized");
   }
   getPopular() {
    return this._jsonp.get('http://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=' + this.apikey)
      .map(res => res.json());
   }

   getInTheatres() {
   return this._jsonp.get('http://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-12-01&primary_release_date.lte=2018-01-2&api_key=' + this.apikey)
     .map(res => res.json());
   }
   searchMovies(searchStr:string) {
    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apikey)
        .map(res => res.json());
 }
 getMovie(id: string) {
  return this._jsonp.get('https://api.themoviedb.org/3/movie/' + id + '?callback=JSONP_CALLBACK&api_key=' + this.apikey)
      .map(res => res.json());
}


}
