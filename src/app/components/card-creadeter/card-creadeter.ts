import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-creadeter',
  imports: [],
  templateUrl: './card-creadeter.html',
  styleUrl: './card-creadeter.scss'
})
export class CardCreadeter {
  @Input() image?:string;
  @Input() name?:string;
  @Input() age?:number;

  constructor(private router:Router){}

  toCreator(){
    this.router.navigate([`/d/c/${this.name}`]);
  }
}
