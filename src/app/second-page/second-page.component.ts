import { Component, OnInit } from '@angular/core';
import {StoreTestService} from "../store-test.service";

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  forContinue() {
    return this.service.forContinue;
  }

  forErik() {
    return this.service.forErik;
  }

  forArticles() {
    return this.service.forArticles;
  }

  forNewBlogPosts() {
    return this.service.forNewBlogPosts;
  }

  constructor(private service: StoreTestService) { }

  ngOnInit(): void {
  }

}
