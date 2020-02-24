import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { LoginComponent } from "./components/login/login.component";
import { UserAddComponent } from "./components/user-add/user-add.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { UsersComponent } from "./components/users/users.component";
import { UserDetailComponent } from "./components/user-detail/user-detail.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "users", canActivate:[AuthGuard], component: UsersComponent },
  { path: "userAdd", component: UserAddComponent },
  { path: "user/:id", canActivate:[AuthGuard], component: UserDetailComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", canActivate:[AuthGuard], component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
