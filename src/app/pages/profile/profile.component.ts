import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Users } from "../../services/users/users.interface";

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray
} from "@angular/forms";

import { UsersService } from "../../services/users/users.service";

@Component({
  selector: "page-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  showPassword: Boolean;
  error: string;
  countries: any[];
  user: Users;
  base64textString: string;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {
    this.showPassword = false;
    this.error = "";
    this.countries = this.usersService.getCountries();
    this.user = JSON.parse(sessionStorage.getItem("user"));
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [this.user.name, [Validators.required]],
      email: [this.user.email, [Validators.required, Validators.email]],
      country: [this.user.country, [Validators.required]],
      password: [this.user.password, [Validators.required]],
      picture: [this.base64textString, []]
    });
    this.base64textString =
      this.user.picture ||
      "https://avatars.dicebear.com/v2/initials/" +
        this.form.value.name +
        ".svg";
    this.onChanges();
  }

  onChanges(): void {
    this.form.valueChanges.subscribe(val => {
      this.error = "";
    });
  }

  showPass(e) {
    this.showPassword = !this.showPassword;
    e.preventDefault();
  }

  onUploadChange(evt: any) {
    const file = evt.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    this.base64textString = "data:image/png;base64," + btoa(e.target.result);
  }

  onSubmit() {
    if (this.form.valid) {
      this.form.value.picture = this.base64textString;
      const updated: any = this.usersService.updateUser(this.form.value);
      if (updated) {
        this.router.navigate(["/movies"]);
      } else {
        this.error = "Already have an user with this email!";
      }
    } else {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.updateValueAndValidity();
        control.markAsTouched();
      });
    }
  }

  cancel(e) {
    e.preventDefault();
    // this.location.back();
  }
}
