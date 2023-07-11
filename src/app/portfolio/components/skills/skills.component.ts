import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  public isSkillShown:boolean = true;


  showSkills(input: boolean): void {
    this.isSkillShown = input;
    return;
  }
}
