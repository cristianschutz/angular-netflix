import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.scss']
})
export class MoviesItemComponent implements OnInit {
  @Input() movie: any;
  playing: boolean;
  @ViewChild('videoEl') videoplayer: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  play() {
    this.videoplayer.nativeElement.play();
    this.videoplayer.nativeElement.currentTime = 0;
    this.playing = true;
  }

  stop() {
    this.videoplayer.nativeElement.pause();
    this.playing = false;
  }
}
