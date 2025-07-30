import { Component } from '@angular/core';
import { Headers } from "../../components/headers/headers";
import { CardMini } from "../../components/card-mini/card-mini";
import { Creator, Movie, MoviesService } from '../../services/MoviesService ';
import { CardCreadeter } from "../../components/card-creadeter/card-creadeter";

@Component({
  selector: 'app-home-page',
  imports: [Headers, CardMini, CardCreadeter],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {
  movies: Movie[] = [];
  creators: Creator[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
    this.creators = this.movieService.getAllCreators();
  }

  getCreatorsOf(movieName: string): Creator[] {
    return this.movieService.getCreatorsByMovieName(movieName);
  }
}
