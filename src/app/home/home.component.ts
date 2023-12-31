import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showToster = true;
  showPage = 'signup';
  show(page){
    if(page === 'signup') {
      this.showPage = 'signup';
    } else {
      this.showPage = 'signin';
    }
  }
}
