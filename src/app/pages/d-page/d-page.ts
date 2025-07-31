import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie, MoviesService } from '../../services/MoviesService ';
import { Headers } from "../../components/headers/headers";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CardCreadeter } from "../../components/card-creadeter/card-creadeter";
import { BtnToHomepage } from "../../components/btn-to-homepage/btn-to-homepage";

@Component({
  selector: 'app-d-page',
  imports: [CommonModule, Headers, CardCreadeter, BtnToHomepage],
  templateUrl: './d-page.html',
  styleUrl: './d-page.scss'
})


export class DPage {
  protected id: number = -1;
  movieData?: Movie;
  safeUrl?: SafeResourceUrl;

  setMovie(movie: Movie) {
    this.movieData = movie;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(movie.vidoe);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private data: MoviesService,
    private sanitizer: DomSanitizer
  ) {
    const idStr = this.route.snapshot.paramMap.get('id');
    const id = idStr ? parseInt(idStr) : NaN;
    
    if(isNaN(id)){
      this.router.navigate(['/']);
      return;
    }

    this.id = id - 1;
    const movie: Movie | undefined = this.data.getMovieByIndex(this.id)
    if (!movie) {
      this.router.navigate(['/']);
    }else{
      this.movieData = movie;
      this.setMovie(movie);
    }
  }
}
