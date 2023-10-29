import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../tmdb/tmdb.service';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {
  constructor(private service:TmdbService,private router:ActivatedRoute,private title:Title,private meta:Meta) { }
  getMovieDetailResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId,'getparamid#');
  
    this.getMovie(getParamId);
    // this.getVideo(getParamId);
    this.getMovieElenco(getParamId);
  }


  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe(async(result)=>{
        console.log(result,'getmoviedetails#');
        this.getMovieDetailResult = await result;

        
        this.title.setTitle(`${this.getMovieDetailResult.original_title} | ${this.getMovieDetailResult.tagline}`);
        this.meta.updateTag({name:'title',content:this.getMovieDetailResult.original_title});
        this.meta.updateTag({name:'description',content:this.getMovieDetailResult.overview});
     
        
        this.meta.updateTag({property:'og:type',content:"website"});
        this.meta.updateTag({property:'og:url',content:``});
        this.meta.updateTag({property:'og:title',content:this.getMovieDetailResult.original_title});
        this.meta.updateTag({property:'og:description',content:this.getMovieDetailResult.overview});
        this.meta.updateTag({property:'og:image',content:`https://image.tmdb.org/t/p/original/${this.getMovieDetailResult.backdrop_path}`});

    });
  }

  // getVideo(id:any)
  // {
  //   this.service.getMovieVideo(id).subscribe((result)=>{
  //       console.log(result,'getMovieVideo#');
  //       result.results.forEach((element:any) => {
  //           if(element.type=="Trailer")
  //           {
  //             this.getMovieVideoResult = element.key;
  //           }
  //       });

  //   });
  // }

  getMovieElenco(id:any)
  {
    this.service.getMovieElenco(id).subscribe((result)=>{
      console.log(result,'movieCast#');
      this.getMovieCastResult = result.cast;
    });
  }

}
