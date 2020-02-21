import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users/users.service";
import { User } from "../../models/User";



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private _users: [User];

  constructor(private _userService: UsersService) {
    this.getUsers();
  }

  ngOnInit() {
  }

  getUsers() {
    this._userService.getUsers()
      .subscribe((response) => (this._users = response.data));
  }

}
