import { Component, Injectable, inject } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot,RouterStateSnapshot, Router, CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, UrlTree, CanDeactivate } from '@angular/router';
import { Observable, of, from } from 'rxjs';
import { UserService } from '../user/user.service';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignInService } from './signIn.service';
 
@Injectable({
    providedIn: 'root'
})
export class AuthGaurdService implements Resolve<any>, CanActivate, CanActivateChild, CanLoad, CanDeactivate<any> {
    SignInService = inject(SignInService);
    constructor(private _router:Router , private userService:UserService ) {
    }
 
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> {
        return this.userService.getUserList();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // let loggedIn;
        // this.SignInService.loggedIn$.subscribe((loggdInFlag: boolean) => {
        //     loggedIn = loggdInFlag;
        // });
        // return loggedIn;
        return true;
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return true;
    }

    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return true;
    }

    canDeactivate(component: SignInComponent | SignUpComponent, currentRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):  
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // console.log(component.formData.dirty + " " + component.formData.invalid);
        // console.log("destroy value=" , component);
        // return false;
        if(component.ngOnDestroy()){
            return this.canExit();
        } else {
            return true;
        }

        // component.ngOnDestroy()
        // return true;
    }

    canExit() : boolean {
    if (confirm("Do you wish to Please confirm")) {
        return true
        } else {
        return false
        }
    }
}