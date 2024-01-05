import { Component, inject } from '@angular/core';
import { UserService } from '../user/user.service';
import { SignInService } from '../services/signIn.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userService : UserService = inject(UserService);
  signInService: SignInService = inject(SignInService);
  testsite !: string;
  router:Router = inject(Router);
  ngOnInit() {
    this.userService.siteAdmin$.subscribe((admin: string) => {
      this.testsite = admin;
      console.log("testsite " + this.testsite);
    })
  }


  LoggedOut() {
    this.signInService.setLoggedOut(false);
    this.router.navigate(['/home'], {queryParams: {page: 'signin'}});
  }
}
