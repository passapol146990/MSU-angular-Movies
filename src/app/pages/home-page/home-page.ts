import { Component } from '@angular/core';
import { Headers } from "../../components/headers/headers";
import { CardMini } from "../../components/card-mini/card-mini";
import { MoviesService } from '../../services/MoviesService ';

@Component({
  selector: 'app-home-page',
  imports: [Headers, CardMini],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {
  protected movie:any = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    const m = this.moviesService.getMovies();
    this.movie = Object.values(m);
    console.log(this.movie)
  }
}
