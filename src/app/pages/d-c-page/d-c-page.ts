import { Component } from '@angular/core';
import { Headers } from "../../components/headers/headers";
import { ActivatedRoute, Router } from '@angular/router';
import { BtnToHomepage } from "../../components/btn-to-homepage/btn-to-homepage";
import { MoviesService } from '../../services/MoviesService ';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-d-c-page',
  imports: [Headers, BtnToHomepage],
  templateUrl: './d-c-page.html',
  styleUrl: './d-c-page.scss'
})
export class DCPage {
  protected movies = new MoviesService();
  protected name = '';
  protected image = '';
  protected video?:SafeResourceUrl;
  protected age = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    this.initializeCreatorData();
  }

  private initializeCreatorData(): void {
    const name_q: string | null = this.route.snapshot.paramMap.get("name");
    
    if (!name_q) {
      this.router.navigate(['/']);
      return;
    }

    const data = this.movies.getCreatorByName(name_q);
    
    if (!data) {
      this.router.navigate(['/']);
      return;
    }

    this.name = data.name;
    this.image = data.image;
    this.age = data.age;
    
    if (data.video) {
      this.video = this.sanitizer.bypassSecurityTrustResourceUrl(data.video);
    }

    console.log(data);
  }
}