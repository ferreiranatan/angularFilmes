import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb/tmdb.service';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  popularMovies:  | undefined;

  constructor(private tmdbService: TmdbService, private title:Title,private meta: Meta) {
    this.title.setTitle('Home - Show Time');
    this.meta.updateTag({name:'description',content:'watch online movies'});
   }
  

  popularMovieResult: any = [];
  actionMovieResult: any =[]
  adventureMovieResult: any =[]
  animationMovieResult: any=[]
  comedyMovieResult: any=[]

  ngOnInit():void {
   this.popularMoviesData()
   this.actionMoviesData()
   this.adventuresMoviesData()
   this.animationMoviesData()
   this.comedyMoviesData()
  }

  popularMoviesData(){
    this.tmdbService.getPopularMovies().subscribe((result)=>{
      this.popularMovieResult = result.results;
    })
  }

  actionMoviesData(){
    this.tmdbService.getActionMovies().subscribe((result)=>{
      this.actionMovieResult = result.results;
    })
  
  
  }

  adventuresMoviesData(){
    this.tmdbService.getAdventureMovies().subscribe((result)=>{
      this.adventureMovieResult = result.results
    })
  }
  
  animationMoviesData(){
    this.tmdbService.getAnimationMovies().subscribe((result)=>{
      this.animationMovieResult = result.results
    })
  }


  comedyMoviesData(){
    this.tmdbService.getComedyMovies().subscribe((result)=>{
      this.comedyMovieResult = result.results
    })
  }

}  
