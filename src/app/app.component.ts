import { Component } from '@angular/core';
import {StoreTestService} from "./store-test.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  // result = 0;

  constructor(private service: StoreTestService) { }

  clicker = (item) => {
    console.log(item)
  }

  forHeader() {
    return this.service.forHeader;
  };

  forFooter() {
    return this.service.forFooter;
  }

  // public onClickSumButton() {
  //   const result = this.storeTestService.sum(5, 5);
  //   this.result = result;
  // }

}
