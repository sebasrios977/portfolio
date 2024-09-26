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
    const img = new Image();
    const baseHref = document.getElementsByTagName('base')[0].href;
    img.src = `${baseHref}assets/background-image-2.jpg`;
    img.onload = () => {
      setTimeout(() => {
        this.isImageLoaded = true;
      }, 1000);
    };
  }
}
