import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-mini',
  templateUrl: './card-mini.html',
  styleUrls: ['./card-mini.scss']
})

export class CardMini {
  @Input() id!: number;
  @Input() image!: string;
  @Input() star!: number|string;
  @Input() title!: string;
  name: string = '';

  constructor(private router:Router){}

  ngOnInit() {
    const length = 10
    this.name = this.title && this.title.length > length ? this.title.slice(0, length)+'...' : (this.title || '');
  }

  clickTrailer(){
    this.router.navigateByUrl(`/d/${this.id}`);
  }
}
