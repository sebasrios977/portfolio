import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { GridComponent } from './grid/grid.component';
import { StatusComponent } from './status/status.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent,
    GridComponent,
    StatusComponent,
    FooterComponent,
    SkillsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    HeroComponent,
    GridComponent,
    StatusComponent,
    FooterComponent,
    SkillsComponent,
  ],
})
export class ComponentsModule { }
