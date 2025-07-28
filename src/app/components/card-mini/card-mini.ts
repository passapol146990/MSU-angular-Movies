import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-mini',
  templateUrl: './card-mini.html',
  styleUrls: ['./card-mini.scss']
})

export class CardMini {
  @Input()id!: number;
  @Input() image!: string;
  @Input() star!: Float32Array;
  @Input() title!: string;
  name: string = '';

  ngOnInit() {
    const length = 10
    this.name = this.title && this.title.length > length ? this.title.slice(0, length)+'...' : (this.title || '');
  }
}
