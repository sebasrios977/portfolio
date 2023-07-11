import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  public isPortfolioShown:boolean = true;


  showPortfolio(input: boolean): void {
    this.isPortfolioShown = input;
    return;
  }
}
