import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies-carousel',
  templateUrl: './movies-carousel.component.html',
  styleUrls: ['./movies-carousel.component.scss']
})
export class MoviesCarouselComponent implements OnInit {
  @Input() cat: any;

  constructor() {}

  ngOnInit(): void {}
}
