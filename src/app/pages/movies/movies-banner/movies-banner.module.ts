import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesBannerComponent } from './movies-banner.component';
import { MoviesRoutingModule } from '../movies.routing.module';

@NgModule({
  declarations: [MoviesBannerComponent],
  imports: [CommonModule, MoviesRoutingModule],
  exports: [MoviesBannerComponent]
})
export class MoviesBannerModule {}
