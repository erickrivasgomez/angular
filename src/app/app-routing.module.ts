import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { UsersComponent } from "./components/users/users.component";
import { UserDetailComponent } from "./components/user-detail/user-detail.component";

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "users", component: UsersComponent },
  { path: "user/:id", component: UserDetailComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
