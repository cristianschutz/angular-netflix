import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MoviesService } from "../../../services/movies/movies.service";
import { MovieInterface } from "../../../services/movies/movies.interface";

@Component({
  selector: "movies-banner",
  templateUrl: "./movies-banner.component.html",
  styleUrls: ["./movies-banner.component.scss"]
})
export class MoviesBannerComponent implements OnInit {
  @ViewChild("videoBannerEl") videoplayer: ElementRef;
  playing: boolean = true;
  muted: boolean = true;
  movie: MovieInterface;
  activeMovie: boolean = false;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.movie = this.moviesService.getMovies(true)[0];
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
