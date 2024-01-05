import { Component, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent {
  showPage: string;
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((paramsObj: any) => {
      this.showPage = paramsObj.get('page')? paramsObj.get('page') : 'signup';
    })
  }
  show(page){
    if(page === 'signup') {
      this.showPage = 'signup';
    } else {
      this.showPage = 'signin';
    }
  }
}
