import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/components/login/login.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserAddComponent } from './shared/components/user-add/user-add.component';
import { UserDetailComponent } from './shared/components/user-detail/user-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    UserAddComponent,
    UserDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
