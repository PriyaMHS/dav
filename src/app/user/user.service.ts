import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, lastValueFrom, pipe, map, filter, tap,take, forkJoin, of, from, debounceTime, pluck, switchMap, mergeMap, distinctUntilChanged } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userId = new BehaviorSubject<number>(0);
  userId$ = this.userId.asObservable();
  private siteAdmin = new Subject<string>();
  siteAdmin$ = this.siteAdmin.asObservable();
  constructor(private http: HttpClient) { }

  getUserList() {
    // return this.http.get('https://api.github.com/users').pipe(
    //   tap(x=> console.log("Got data from api")),
    //   filter((x: any)=> x),
    //   take(5)
    // );
    return lastValueFrom(this.http.get('https://api.github.com/users'));
  }

  getUserByUserId(id) {
    return this.http.get('https://api.github.com/users').pipe(
      tap(x=> console.log("Got users data from api")),
      map((userList: any) => userList.filter(user => user.id === id)[0])
    )
  }

  setUserId(id: number) {
    this.userId.next(id);
    this.siteAdmin.next("yes");
    this.userId.complete();
    this.siteAdmin.complete();
  }

  getUserJson() {
    return lastValueFrom(this.http.get('https://api.github.com/users'));
  }

  googleUsers() {
    return this.http.get('https://api.github.com/users/google').toPromise();
    // return this.http.get('https://api.github.com/users/google');
  }

  microsoftUsers() {
    return this.http.get('https://api.github.com/users/microsoft').toPromise();
  }


  forkMethod() {
    let a = this.http.get('https://api.github.com/users');
    let b = this.http.get('https://api.github.com/users/google');
    let c = this.http.get('https://api.github.com/users/microsoft');
    
    // return a.pipe(pluck('id'))
    // return from([a,a,a]).pipe(
    //   distinctUntilChanged()
    // )

    // return of('apple', 'banana','chiku').pipe(
    //   mergeMap((data) =>  of("Got " + data))
    // )


    return a.pipe(switchMap((user: any) => { 
      console.log("user", user);
      return b}),
      switchMap((google)=> {
      console.log("google", google);
       return c;
      }));
    //  return forkJoin([a,b,c]);
  }

  rxoperators() {
    return of(1,2,3).pipe(debounceTime(10000));
    // return from([1,2,3]);
  }

}
