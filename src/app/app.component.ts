import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dav';
  testsite!: string;
  constructor(private userService: UserService) {
    this.userService.siteAdmin$.subscribe((admin: string) => {
      this.testsite = admin;
      console.log("testsite " + this.testsite);
    })
  }

  ngOnInit() {
    
  }

  ngAfterContentInit() {
    
  }

  ngAfterContentChecked() {

  }
}
