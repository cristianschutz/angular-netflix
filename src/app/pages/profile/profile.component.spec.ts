import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ProfileRoutingModule } from './profile.routing.module';
import { ProfileComponent } from './profile.component';

import { HeaderModule } from '../../shared/header/header.module';
import { FooterModule } from '../../shared/footer/footer.module';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';

import { UsersService } from '../../services/users/users.service';

describe('ProfileComponent', () => {
  // // let component: ProfileComponent;
  // let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ProfileRoutingModule,
        HeaderModule,
        FooterModule,
        RouterTestingModule
      ],
      providers: [FormBuilder, UsersService]
    }).compileComponents();
  }));
});
