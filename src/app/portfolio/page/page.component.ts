import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  isImageLoaded: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.preloadBackgroundImage();
  }

  preloadBackgroundImage(): void {
    setTimeout(() => {
      this.isImageLoaded = true;
    }, 2000);
  }
}
