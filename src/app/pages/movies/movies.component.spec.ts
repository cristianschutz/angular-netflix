import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';

import { MoviesComponent } from './movies.component';
import { MoviesCarouselComponent } from './movies-carousel/movies-carousel.component';
import { MoviesItemComponent } from './movies-item/movies-item.component';

import { HeaderModule } from '../../shared/header/header.module';
import { FooterModule } from '../../shared/footer/footer.module';
import { MoviesRoutingModule } from './movies.routing.module';
import { MoviesBannerModule } from './movies-banner/movies-banner.module';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MoviesComponent,
        MoviesCarouselComponent,
        MoviesItemComponent
      ],
      imports: [
        CommonModule,
        MoviesRoutingModule,
        HeaderModule,
        FooterModule,
        MoviesBannerModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
