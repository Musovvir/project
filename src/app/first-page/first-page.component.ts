import { Component, OnInit } from '@angular/core';
import {StoreTestService} from "../store-test.service";

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor(private service: StoreTestService) { }

  forSidebar() {
    return this.service.forSidebar;
  }

  forNewBlog() {
    return this.service.forNewBlog;
  }

  forNewBlogPosts() {
    return this.service.forNewBlogPosts;
  }

  forPopular() {
    return this.service.forPopular;
  }

  forEvents() {
    return this.service.forEvents;
  }

  forDrive() {
    return this.service.forDrive;
  }

  ngOnInit(): void {
  }

}
