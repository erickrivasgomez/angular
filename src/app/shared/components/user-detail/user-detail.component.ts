import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users/users.service";
import { User } from "../../models/User";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private _user: User;
  private _id: string;

  constructor(private _userService: UsersService, private _Activatedroute:ActivatedRoute) {
    this._id=this._Activatedroute.snapshot.paramMap.get("id");
    this.getUser(this._id);
  }

  ngOnInit() {
  }

  getUser(id: string) {
    this._userService.getUserById(this._id)
      .subscribe((response) => (this._user = response.data));
      console.log(this._user)
  }

}
