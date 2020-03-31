import { Injectable } from "@angular/core";
import { Users } from "./users.interface";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  email: string;
  users: Users[];
  user: Users;
  countries: any[];

  constructor(private router: Router, private authService: AuthService) {
    this.users = JSON.parse(localStorage.getItem("users")) || [];
    this.countries = this.getCountries();
  }

  getUsers() {
    return this.users;
  }

  getCountries() {
    return [
      {
        id: "BRA",
        name: "Brasil"
      },
      {
        id: "ARG",
        name: "Argentina"
      },
      {
        id: "USA",
        name: "United States"
      }
    ];
  }

  getCountry(id: string) {
    return this.getCountries().filter(item => id === item.id);
  }

  getAll() {
    return this.users;
  }

  checkUserAlready(email: string, id: number = null) {
    if (id) {
      console.log("id", id);
      return this.getAll().filter(
        item => email === item.email && id !== item.id
      ).length > 0
        ? true
        : false;
    } else {
      console.log("noid");
      return this.getAll().filter(item => email === item.email).length > 0
        ? true
        : false;
    }
  }

  addUser() {
    if (!this.checkUserAlready(this.user.email)) {
      this.user.id = Math.floor(Math.random() * 101);
      this.users.push(this.user);
      localStorage.setItem("users", JSON.stringify(this.users));
      return this.authService.login(this.user);
    } else {
      return false;
    }
  }

  updateUser(userUpdated) {
    const user = JSON.parse(sessionStorage.getItem("user"));
    console.log("userUpdated", userUpdated.email, user.id);
    if (this.checkUserAlready(userUpdated.email, user.id)) {
      return false;
    }

    const newusers = this.users.map(item => {
      if (item.id === user.id) {
        userUpdated.id = user.id;
        sessionStorage.setItem("user", JSON.stringify(userUpdated));
        return userUpdated;
      }
    });
    localStorage.setItem("users", JSON.stringify(newusers));
    return true;
  }

  setUser(user: Users) {
    this.user = user;
  }
}
