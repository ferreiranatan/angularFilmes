import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiUrl = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/trending/movie/day?api_key=${environment.apiKey}`);
  }
  
  getActionMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/movie?api_key=${environment.apiKey}&with_genres=28`);
  
  }

  getAdventureMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/movie?api_key=${environment.apiKey}&with_genres=12`);
  }


  getAnimationMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/movie?api_key=${environment.apiKey}&with_genres=16`);
  }

  getComedyMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/movie?api_key=${environment.apiKey}&with_genres=35`);
  }


  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');

    return this.http.get(`${this.apiUrl}/search/movie?api_key=${environment.apiKey}&query=${data.movieName}`);
  }


  getMovieDetails(data: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${data}?api_key=${environment.apiKey}`)
  }


  getMovieElenco(data: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${data}/credits?api_key=${environment.apiKey}`)
  }
}

