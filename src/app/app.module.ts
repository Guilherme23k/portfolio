import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { ProfileSectionModule } from './profile-section/profile-section.module';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { AboutMeSectionModule } from './about-me-section/about-me-section.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ProfileSectionModule,
    AboutMeSectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
