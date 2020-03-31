import { Component, OnInit } from "@angular/core";

import { MoviesService } from "../../services/movies/movies.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "page-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"]
})
export class MoviesComponent implements OnInit {
  categories: any[];
  userMovies: any[];
  mostWatched: boolean;
  countries: any[];

  constructor(
    private moviesService: MoviesService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.mostWatched = this.router.snapshot.url.length ? true : false;
    this.categories = this.moviesService.getCategories(this.mostWatched);
    this.countries = this.moviesService.getCountriesByViews();
    this.userMovies = this.moviesService.getMoviesByUser();
  }
}
