import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from "./shared/components/welcome/welcome.component";
import { LoginComponent } from "./shared/components/login/login.component";

import { UsersComponent } from "./shared/components/users/users.component";

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "users", component: UsersComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
