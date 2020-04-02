import { Injectable } from '@angular/core';
import { Users } from '../users/users.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Users;

  constructor() {}

  login(user) {
    const allUsers = JSON.parse(localStorage.getItem('users'));
    const userLogin = allUsers.find(
      item => user.email === item.email && user.password === item.password
    );
    if (userLogin) {
      sessionStorage.setItem('user', JSON.stringify(userLogin));
      return true;
    } else {
      return false;
    }
  }

  isAuth() {
    return sessionStorage.getItem('user') ? true : false;
  }

  getCurrentUser() {
    return JSON.parse(sessionStorage.getItem('user'));
  }
}
