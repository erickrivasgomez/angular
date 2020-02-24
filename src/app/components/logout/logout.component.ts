import { Component, OnInit } from '@angular/core';
import { TokenService } from "../../shared/services/token/token.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private _tokenService: TokenService,
    private _router: Router
  ) {
    this.logOut()
  }

  ngOnInit() {
  }

  logOut(){
    this._tokenService.removeActiveItem()
    this._router.navigate([''])
  }

}
