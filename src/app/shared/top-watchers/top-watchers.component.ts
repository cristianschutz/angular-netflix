import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { UsersService } from "../../services/users/users.service";
import { Users } from "../../services/users/users.interface";

@Component({
  selector: "share-top-watchers",
  templateUrl: "./top-watchers.component.html",
  styleUrls: ["./top-watchers.component.scss"]
})
export class TopWatchersComponent implements OnInit {
  @Output() close = new EventEmitter();
  users: Users[];
  init: boolean = false;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.getAll(true).slice(0, 3);
  }

  ngAfterViewInit() {
    setTimeout(() => (this.init = true), 1000);
  }

  closeModal() {
    this.close.emit(true);
  }

  moviesCount(views) {
    return views.lenght || 0;
  }
}
