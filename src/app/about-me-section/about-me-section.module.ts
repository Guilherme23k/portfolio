import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeSectionComponent } from './about-me-section.component';



@NgModule({
  declarations: [AboutMeSectionComponent],
  imports: [
    CommonModule
  ],
  exports:[
    AboutMeSectionComponent
  ]
})
export class AboutMeSectionModule { }
