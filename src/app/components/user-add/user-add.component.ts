import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Login } from "../../shared/models/Login";
import { TokenService } from "../../shared/services/token/token.service";
import { RegisterService } from "../../shared/services/register/register.service";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _registerService: RegisterService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ["eve.holt@reqres.in", [Validators.required, Validators.minLength(5)]],
      password: ["pistol", [Validators.required, Validators.minLength(2)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // do call here
      const registerObject: Login = {
        email: this.loginForm.get("email").value,
        password: this.loginForm.get("password").value
      };
      this._registerService.register(registerObject).subscribe(response => {
        if (response.id) {
          alert("Successfully registered")
          this._router.navigateByUrl("");
        } else {
          alert("Error in request")
        }
      });
    } else {
      alert('error')
    }
  }

}
