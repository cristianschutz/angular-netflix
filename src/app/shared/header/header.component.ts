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

  constructor(private router: Router) {
    this.fixMenu = this.router.url === "/profile" ? true : false;
    this.user = JSON.parse(sessionStorage.getItem("user"));
  }

  ngOnInit() {}

  onWindowScroll() {
    if (window.pageYOffset > 72) {
      this.fixMenu = true;
    } else {
      this.fixMenu = this.router.url === "/profile" ? true : false;
    }
  }
}
