import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, from } from 'rxjs';
import { UserService } from '../user/user.service';
 
@Injectable({
    providedIn: 'root'
})
export class AuthGaurdService implements Resolve<any>{
 
    constructor(private _router:Router , private userService:UserService ) {
    }
 
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        let userList:any = [];
        this.userService.getUserList().then((list: any) => {
            userList = list;
        })
        return userList;
    }
}