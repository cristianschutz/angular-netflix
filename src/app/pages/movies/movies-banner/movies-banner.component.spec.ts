import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { MoviesService } from '../../../services/movies/movies.service';
import { MovieInterface } from '../../../services/movies/movies.interface';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesBannerComponent } from './movies-banner.component';
import { MoviesRoutingModule } from '../movies.routing.module';

describe('MoviesBannerComponent', () => {
  let component: MoviesBannerComponent;
  let fixture: ComponentFixture<MoviesBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesBannerComponent],
      imports: [CommonModule, MoviesRoutingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
