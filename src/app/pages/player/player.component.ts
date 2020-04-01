import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MoviesService } from "../../services/movies/movies.service";
import { AuthService } from "../../services/auth/auth.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.scss"]
})
export class PlayerComponent implements OnInit {
  @ViewChild("videoEl") videoplayer: ElementRef;
  @ViewChild("timelineEl") timelineEl: ElementRef<HTMLSpanElement>;
  mute: boolean;
  totalVol: boolean;
  playing: boolean;
  timePosition: number;
  timePositionBackdrop: number;
  id: number;
  movie: any;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.id = parseInt(this.route.snapshot.params["id"]);
    this.movie = this.moviesService.getMovie(this.id);
  }

  ngOnInit() {
    this.mute = false;
    this.timePosition = 0;
    this.playing = true;

    this.moviesService.setViews(
      this.id,
      this.movie.category,
      this.authService.getCurrentUser().country
    );
  }

  play() {
    this.videoplayer.nativeElement.play();
    this.playing = true;
  }

  pause() {
    this.videoplayer.nativeElement.pause();
    this.playing = false;
  }

  stop() {
    this.videoplayer.nativeElement.stop();
  }

  volUp() {
    this.mute = false;
    if (this.videoplayer.nativeElement.volume + 0.2 <= 0.8) {
      this.videoplayer.nativeElement.volume =
        this.videoplayer.nativeElement.volume + 0.2;
      this.totalVol = false;
    } else {
      this.videoplayer.nativeElement.volume = 1;
      this.totalVol = true;
    }
  }

  volDown() {
    if (this.videoplayer.nativeElement.volume <= 0.2) {
      this.mute = true;
      this.videoplayer.nativeElement.volume = 0;
    } else {
      this.totalVol = false;
      this.videoplayer.nativeElement.volume =
        this.videoplayer.nativeElement.volume - 0.2;
    }
  }

  muteVideo() {
    if (this.mute) {
      this.videoplayer.nativeElement.volume = 0.5;
    } else {
      this.videoplayer.nativeElement.volume = 0;
    }
    this.mute = !this.mute;
  }

  timeline() {
    this.timePosition =
      this.videoplayer.nativeElement.currentTime /
      this.videoplayer.nativeElement.duration;
  }

  timelineSet(e) {
    let percentVideo = (e.offsetX / e.srcElement.offsetWidth) * 100;

    this.videoplayer.nativeElement.currentTime =
      (this.videoplayer.nativeElement.duration * percentVideo) / 100;
  }
}
