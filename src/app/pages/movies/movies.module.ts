import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MoviesComponent } from "./movies.component";
import { MoviesCarouselComponent } from "./movies-carousel/movies-carousel.component";
import { MoviesItemComponent } from "./movies-item/movies-item.component";

import { HeaderModule } from "../../shared/header/header.module";
import { FooterModule } from "../../shared/footer/footer.module";
import { MoviesRoutingModule } from "./movies.routing.module";
import { MoviesBannerModule } from "./movies-banner/movies-banner.module";

@NgModule({
  declarations: [MoviesComponent, MoviesCarouselComponent, MoviesItemComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HeaderModule,
    FooterModule,
    MoviesBannerModule
  ]
})
export class MoviesModule {}
