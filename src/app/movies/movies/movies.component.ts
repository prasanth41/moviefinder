import { Observable } from 'rxjs/Observable';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  popularList: Array<object>;
  theaterList: Array<object>;
  searchStr: string;
  searchRes: Array<object>;

  constructor(private _movieService: MovieService) {

    this._movieService.getPopular().subscribe(res => {
     this.popularList = res.results;
    });
    this._movieService.getInTheatres().subscribe(res => {
    this.theaterList = res.results;
    });

    }
    searchMovies() {
      console.log(this.searchStr);
    this._movieService.searchMovies(this.searchStr).subscribe(res => {
    this.searchRes = res.results;
    });

    }

    }


