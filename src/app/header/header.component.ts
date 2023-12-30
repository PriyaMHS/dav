import { Component, inject } from '@angular/core';
import { UserService } from '../user/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userService : UserService = inject(UserService);
  testsite !: string;
  ngOnInit() {
    this.userService.siteAdmin$.subscribe((admin: string) => {
      this.testsite = admin;
      console.log("testsite " + this.testsite);
    })
  }
}
