import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Login } from "../../shared/models/Login";
import { TokenService } from "../../shared/services/token/token.service";
import { LoginService } from "../../shared/services/login/login.service";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService,
    private _tokenService: TokenService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ["eve.holt@reqres.in", [Validators.required, Validators.minLength(5)]],
      password: ["cityslicka", [Validators.required, Validators.minLength(2)]]
    });
  }

  onSubmit() {
    console.log(this.loginForm.controls.email);
    console.log(this.loginForm.controls.password);
    if (this.loginForm.valid) {
      // do call here
      const loginObject: Login = {
        email: this.loginForm.get("email").value,
        password: this.loginForm.get("password").value
      };
      this._loginService.login(loginObject).subscribe(response => {
        console.log(response);
        this._tokenService.setActiveToken(response.token);
        console.log(response.token);
        this._router.navigateByUrl("users");
      });
    } else {
      alert('error')
    }
  }

}