import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

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
    img.src = '../../../assets/background-image-2.jpg';
    img.onload = () => {
      setTimeout(() => {
        this.isImageLoaded = true;
      }, 1000);
    };
  }
}
