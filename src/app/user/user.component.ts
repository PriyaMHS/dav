import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject, Subscription, interval, takeUntil, take, flatMap,fromEvent,debounceTime, mergeMap, switchMap, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userList!: any;
  selectedUser!: number;
  siteAdminType!: string;
  // destroy$: Subject<boolean> = new Subject<boolean>();
  destroy$ !: Subscription;
  constructor(private userService: UserService, private router: Router, private http: HttpClient) {
    this.userService.userId$.subscribe((id: number)=> {
      this.selectedUser = id
    });

    this.userService.siteAdmin$.subscribe((admin: string) => {
      this.siteAdminType = admin;
    })
  }

  ngOnInit() {
    // this.userService.getUserList().pipe(takeUntil(this.destroy$)).subscribe((list: any)=> {
    //   this.userList = list;
    // })
  

    // this.destroy$ = interval(1000).pipe(flatMap(() => this.userService.getUserList())).subscribe((list: any)=> {
    //   this.userList = list;
    // })
    let index = 1;
    interval(1000).pipe(take(5),flatMap(() => this.userService.getUserList())).subscribe((list: any)=> {
      console.log("called " + index);
      index++;
      this.userList = list;
    })

    //promise
    this.userService.getUserList().then((list: any)=>{
      this.userList = list;
    })

    this.rxjsFunCall();

    // this.promiseChain();
    // this.promiseAllMethod();
  }

  rxjsFunCall() {
    // this.inputEv();
    // this.userService.rxoperators().subscribe((data) => {
    //   console.log("of", data);
    // })
    this.userService.forkMethod().subscribe((data) => {
      console.log("fork", data);
    })
  }

  getData(data: string) {
    // return setTimeout(() => {
    //   console.log(data);
    //   return data;
    // }, 500);
    // return data;
    return this.http.get('https://api.github.com/users')
  }

  inputEv() {
    let searchInput: any = document.getElementById('searchInput');

    fromEvent(searchInput, 'input').pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(() => this.getData(searchInput.value))
    ).subscribe(data => {
      console.log("search event " + JSON.stringify(data));
      return data;
      // Perform search operation here
    });
  }

  viewDetails(id: number) {
    this.userService.setUserId(id);   
    this.router.navigate(['user/' +id]);
  }

  ngOnDestroy() {
    // this.destroy$.next(true);
    // this.destroy$.complete();
    // this.destroy$.unsubscribe();
  }

  promiseChain() {
    this.userService.getUserJson()
    .then((userData) => {
      console.log("userData", userData);
      return this.userService.googleUsers();
    })
    .then((googleUserData) => {
      console.log(googleUserData);
    })
    .catch((err) => {
      console.log(err);
    }).finally(() => {
      console.log("finally");
    })
  }

  promiseAllMethod() {
    let pr1 = this.userService.getUserJson(),
    pr2 = this.userService.googleUsers();
    
    Promise.all([pr1, pr2]).then((data: any) => {
      console.log("promiseAllData", data);
    })

  }

  
}
