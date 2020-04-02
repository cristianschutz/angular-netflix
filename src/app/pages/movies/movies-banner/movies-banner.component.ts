import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { MoviesService } from '../../../services/movies/movies.service';
import { MovieInterface } from '../../../services/movies/movies.interface';

@Component({
  selector: 'app-movies-banner',
  templateUrl: './movies-banner.component.html',
  styleUrls: ['./movies-banner.component.scss']
})
export class MoviesBannerComponent implements OnInit, AfterViewInit {
  @ViewChild('videoBannerEl') videoplayer: ElementRef;
  playing = true;
  muted = true;
  movie: MovieInterface;
  activeMovie = false;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    const rand = Math.floor(Math.random() * 10);
    this.movie = this.moviesService.getMovies(true)[rand];
  }

  ngAfterViewInit() {
    this.videoplayer.nativeElement.volume = 0;
    this.videoplayer.nativeElement.loop = false;
  }

  replay() {
    this.videoplayer.nativeElement.play();
    this.videoplayer.nativeElement.currentTime = 0;
    this.videoplayer.nativeElement.volume = 0;
    this.playing = true;
    this.muted = true;
    this.activeMovie = false;
  }

  unmute() {
    this.videoplayer.nativeElement.volume = 0.7;
    this.muted = false;
  }

  mute() {
    this.videoplayer.nativeElement.volume = 0;
    this.muted = true;
  }

  end() {
    this.videoplayer.nativeElement.currentTime = 0;
    this.playing = false;
    this.muted = true;
    this.activeMovie = false;
  }

  time() {
    if (this.videoplayer.nativeElement.currentTime >= 7) {
      this.activeMovie = true;
    }
  }
}
