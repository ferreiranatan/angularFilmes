import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  popularMovies:  | undefined;

  constructor(private tmdbService: TmdbService) { }

  ngOnInit() {
    this.tmdbService.getPopularMovies().subscribe((response: any) => {
      this.popularMovies = response.results;
    });
  }
}
