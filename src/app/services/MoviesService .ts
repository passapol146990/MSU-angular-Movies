import { Injectable } from '@angular/core';
import MoviesJson from './json/Movies.json';

export interface Creator {
  name: string;
  image: string;
  age: number;
}

export interface Movie {
  name: string;
  midb: number | string;
  image: string;
  image_bg: string;
  vidoe: string;
  detail: string;
  genre: string;
  creator: Creator[];
}


@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  private movies: Movie[] = MoviesJson;

  constructor() {}

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieByName(name: string): Movie | undefined {
    return this.movies.find(movie => movie.name === name);
  }

  getMovieByIndex(idx: number): Movie | undefined {
    return this.movies[idx];
  }

  getAllCreators(): Creator[] {
    const creators: Creator[] = [];

    for (const movie of this.movies) {
      const movieCreators = Object.values(movie.creator);
      creators.push(...movieCreators);
    }

    const unique = creators.filter((value, index, self) =>
      index === self.findIndex((c) => c.name === value.name)
    );

    return unique;
  }

  getMovieByLength(len:number){
    return this.movies.slice(0,len)
  }

  getCreatorsByMovieName(name: string): Creator[] {
    const movie = this.getMovieByName(name);
    return movie ? Object.values(movie.creator) : [];
  }
}
