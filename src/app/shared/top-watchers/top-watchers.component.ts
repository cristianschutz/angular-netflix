import {
  Component,
  OnInit,
  AfterViewInit,
  Output,
  EventEmitter
} from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { Users } from '../../services/users/users.interface';

@Component({
  selector: 'app-share-top-watchers',
  templateUrl: './top-watchers.component.html',
  styleUrls: ['./top-watchers.component.scss']
})
export class TopWatchersComponent implements OnInit, AfterViewInit {
  users: Users[];
  init = false;
  @Output() closed = new EventEmitter<boolean>();

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.getAll(true).slice(0, 3);
  }

  ngAfterViewInit() {
    setTimeout(() => (this.init = true), 1000);
  }

  closeModal() {
    this.closed.emit(true);
  }

  moviesCount(views) {
    return views.lenght || 0;
  }
}
