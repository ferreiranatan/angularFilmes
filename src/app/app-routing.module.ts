import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
  { path: '', component: PopularMoviesComponent },
  {path:'search',component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
