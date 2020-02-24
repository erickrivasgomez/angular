import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Constant } from "../../classes/Constant";
import { Login } from "../../models/Login";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private _http: HttpClient
  ) { }

  public register(body: Login): Observable<any> {
    return this._http.post(Constant.API + "/register", body, Constant.headers);
  } 
}