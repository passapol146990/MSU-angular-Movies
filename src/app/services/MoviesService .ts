import { Injectable } from '@angular/core';
import MoviesJson from './json/Movies.json'

export interface Movie {
  img:string,
  title:string,
  name:string,
}


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor() { }

  getMovies() {
    return MoviesJson;
  }
}
