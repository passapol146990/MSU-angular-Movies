import { Component, Input } from '@angular/core';

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
}
