import { Component, OnInit } from "@angular/core";
import { Users } from "../../services/users/users.interface";
import { UsersService } from "../../services/users/users.service";
import { Router } from "@angular/router";

@Component({
  selector: "shared-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  fixMenu: Boolean;
  user: Users;
  modal: Boolean;

  constructor(private router: Router) {
    this.fixMenu = this.router.url === "/profile" ? true : false;
    this.user = JSON.parse(sessionStorage.getItem("user"));
    this.user.picture =
      this.user.picture ||
      "https://avatars.dicebear.com/v2/initials/" + this.user.name + ".svg";
    this.modal = false;
  }

  ngOnInit() {}

  onWindowScroll() {
    if (window.pageYOffset > 72) {
      this.fixMenu = true;
    } else {
      this.fixMenu = this.router.url === "/profile" ? true : false;
    }
  }

  logout() {
    sessionStorage.removeItem("user");
    this.router.navigate(["/login"]);
  }

  toggleTopWatchers() {
    this.modal = !this.modal;
  }
}
