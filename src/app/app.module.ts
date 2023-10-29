import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SearchComponent } from './search/search.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { TmdbService } from './tmdb/tmdb.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopularMoviesComponent,
    SearchComponent,
    DetailMovieComponent
    
    
  ],
  imports: [
    ReactiveFormsModule,
    MatToolbarModule,
    MatExpansionModule,
    CarouselModule.forRoot(),
    CommonModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [TmdbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
