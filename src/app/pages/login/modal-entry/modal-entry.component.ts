import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray
} from "@angular/forms";

import { UsersService } from "../../../services/users/users.service";
import { AuthService } from "src/app/services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "shared-modal-entry",
  templateUrl: "./modal-entry.component.html",
  styleUrls: ["./modal-entry.component.scss"]
})
export class ModalEntryComponent implements OnInit {
  form: FormGroup;
  formRegister: FormGroup;
  showPassword: Boolean;
  showRegister: Boolean;
  error: string;
  countries: any[];

  constructor(
    private formBuilder: FormBuilder,
    private user: UsersService,
    private authService: AuthService,
    private router: Router
  ) {
    this.showPassword = false;
    this.showRegister = false;
    this.error = "";
    this.countries = this.user.getCountries();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });

    this.formRegister = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      country: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
    this.onChanges();
  }

  showPass(e) {
    this.showPassword = !this.showPassword;
    e.preventDefault();
  }

  showReg(e) {
    this.showRegister = !this.showRegister;
    this.error = "";
    e.preventDefault();
  }

  onSubmit() {
    if (this.form.valid) {
      this.user.setUser(this.form.value);
      const login = this.authService.login(this.form.value);
      if (login) {
        this.router.navigate(["/movies"]);
      } else {
        this.error = "Invalid Email or Password!";
      }
    } else {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.updateValueAndValidity();
        control.markAsTouched();
      });
    }
  }

  onSubmitRegister() {
    if (this.formRegister.valid) {
      this.user.setUser(this.formRegister.value);
      const addUser = this.user.addUser();
      if (addUser) {
        this.router.navigate(["/movies"]);
      } else {
        this.error = "Already have an user with this email!";
      }
    } else {
      Object.keys(this.formRegister.controls).forEach(field => {
        const control = this.formRegister.get(field);
        control.updateValueAndValidity();
        control.markAsTouched();
      });
    }
  }

  onChanges(): void {
    this.form.valueChanges.subscribe(val => {
      this.error = "";
    });
    this.formRegister.valueChanges.subscribe(val => {
      this.error = "";
    });
  }
}
