import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  user:any;
  userSize: number;
  userService = inject(UserService);
  nextUserId: number = 1;
  prevUserId: number = 1;
  currentUserIndex: number;
  activeUserId: number;
  userList = [];
  router = inject(Router);
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.activeUserId = parseInt(params['id']);
      this.getUserData();
      this.userService.getUserByUserId(this.activeUserId).subscribe((data) => {
        this.user = data;
      });
    });
  }

  redirectTo(move) {
    if(move == 'next') {
      this.nextUserId = this.userList[this.currentUserIndex+1].id;
      this.router.navigate(['/user', this.nextUserId]);
    } if(move == 'prev') {
      this.prevUserId = this.userList[this.currentUserIndex-1].id;
      this.router.navigate(['/user', this.prevUserId]);
    }
  }

  getUserData() {
    this.userService.getUserList().then((data: any) => {
      this.userList = data;
      this.currentUserIndex = data.findIndex((user) => user.id === this.activeUserId);
      this.userSize = data.length;
    })
  }
}
