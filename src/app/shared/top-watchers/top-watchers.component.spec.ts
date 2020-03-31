import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopWatchersComponent } from './top-watchers.component';

describe('TopWatchersComponent', () => {
  let component: TopWatchersComponent;
  let fixture: ComponentFixture<TopWatchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopWatchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopWatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
