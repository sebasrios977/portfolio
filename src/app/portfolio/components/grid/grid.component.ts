import { Component } from '@angular/core';

export interface Projects {
  name: string,
  href: string,
  src: string,
  text: string,
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  public isPortfolioShown:boolean = true;
  public projects: Projects[] = [
    {
      name: 'Space Project',
      href: 'https://spacetourism-srr.netlify.app/#/space/home',
      src: './assets/space-project.png',
      text: 'This project is a challenge by Frontend Mentor. I really love its design and functionality. I made it with Angular.'
    },
    {
      name: 'Anime Project',
      href: 'https://anime-angular.netlify.app/#/home',
      src: './assets/anime-project.png',
      text: 'This project is a personal project. I really like anime, and I wanted to practice my Angular skills with this project.'
    },
    {
      name: 'Years Project',
      href: 'https://years-month-days-calculator.netlify.app/',
      src: './assets/years-project.png',
      text: 'It is a challenge by Frontend Mentor. It was built with React, and basically it shows how many years, months and days has past since an specific date.'
    },
    {
      name: 'Maps Project',
      href: 'https://srrmaps.netlify.app/#/maps/fullscreen',
      src: './assets/maps-project.png',
      text: 'This is a project about maps using mapbox API. It was incredible while I was making it. It was made with Angular.'
    },
    {
      name: 'Interactive Card Project',
      href: 'https://interactive-card-srr.netlify.app/',
      src: './assets/card-project.png',
      text: 'This is a project by Frontend Mentor. Its about introducing credit cards in the page, but its important to fill all fields. I love its design and functionality. It was built with Angular.'
    },
    {
      name: 'Coffee Project',
      href: 'https://coffee-srr.netlify.app/',
      src: './assets/coffee-project.png',
      text: 'Its a simple project using HTML and CSS, but I liked its desing. It is about coffee.'
    },
  ]

  showPortfolio(): void {
    this.isPortfolioShown = !this.isPortfolioShown;
  }
}
