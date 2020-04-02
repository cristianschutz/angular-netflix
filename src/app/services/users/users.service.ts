import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

import { Users } from './users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  email: string;
  users: Users[];
  user: Users;
  countries: any[];

  constructor(private router: Router, private authService: AuthService) {
    this.users = this.getAll();
    this.countries = this.getCountries();
  }

  getUsers() {
    return this.users;
  }

  getCountries() {
    return [
      {
        id: 'BRA',
        name: 'Brazil'
      },
      {
        id: 'ARG',
        name: 'Argentina'
      },
      {
        id: 'USA',
        name: 'United States'
      }
    ];
  }

  getCountry(id: string) {
    return this.getCountries().filter(item => id === item.id);
  }

  getAll(orderByViews: boolean = false) {
    const usersStorage: Users[] =
      JSON.parse(localStorage.getItem('users')) || [];
    usersStorage.map(item => {
      item.views =
        JSON.parse(localStorage.getItem(`viewsByUser-${item.id}`)) || [];
      return item;
    });

    if (orderByViews) {
      usersStorage.sort((a, b) => {
        if (a.views.length < b.views.length) {
          return 1;
        }
        if (a.views.length > b.views.length) {
          return -1;
        }
        return 0;
      });
    }
    return usersStorage;
  }

  checkUserAlready(email: string, id: number = null) {
    if (id) {
      return this.getAll().filter(
        item => email === item.email && id !== item.id
      ).length > 0
        ? true
        : false;
    } else {
      return this.getAll().filter(item => email === item.email).length > 0
        ? true
        : false;
    }
  }

  addUser() {
    if (!this.checkUserAlready(this.user.email)) {
      this.user.id = Math.floor(Math.random() * 101);
      this.users.push(this.user);
      localStorage.setItem('users', JSON.stringify(this.users));
      return this.authService.login(this.user);
    } else {
      return false;
    }
  }

  updateUser(userUpdated: Users) {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (this.checkUserAlready(userUpdated.email, user.id)) {
      return false;
    }

    const newusers = this.users.map(item => {
      if (item.id === user.id) {
        item.name = userUpdated.name;
        item.email = userUpdated.email;
        item.country = userUpdated.country;
        item.password = userUpdated.password;
        item.picture = userUpdated.picture;
        sessionStorage.setItem('user', JSON.stringify(item));
      }
      return item;
    });

    localStorage.setItem('users', JSON.stringify(newusers));
    return true;
  }

  setUser(user: Users) {
    this.user = user;
  }
}
