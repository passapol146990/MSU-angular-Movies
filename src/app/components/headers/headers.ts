import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headers',
  imports: [],
  templateUrl: './headers.html',
  styleUrl: './headers.scss'
})
export class Headers {
  constructor(
    private router:Router
  ){}

  backHomePage(){
    this.router.navigate(['/']);
  }
}
