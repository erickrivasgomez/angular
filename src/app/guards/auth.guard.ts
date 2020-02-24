import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenService } from "../shared/services/token/token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _token:TokenService,
    private _router:Router
    ){
    
  }


  canActivate(
   ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(localStorage.getItem('token')){
         return true;
      }else{
        this._router.navigate(['']);
      }
  }
  
}
