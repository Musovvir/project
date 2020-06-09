import { Component, OnInit } from '@angular/core';
import {StoreTestService} from "../store-test.service";

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {

  forNews() {
    return this.service.forNews;
  }

  constructor(private service: StoreTestService) { }

  ngOnInit(): void {
  }

}
