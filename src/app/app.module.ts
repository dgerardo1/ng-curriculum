import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Pages
// import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
//Components
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AdditionalInformationComponent } from './components/additional-information/additional-information.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TechnicalSkillsComponent } from './components/technical-skills/technical-skills.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { LanguagesComponent } from './components/languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    HomeComponent,
    PortfolioComponent,
    // ContactComponent,
    NavbarComponent,
    WorkExperienceComponent,
    EducationComponent,
    ProfileComponent,
    CoursesComponent,
    AdditionalInformationComponent,
    FooterComponent,
    TechnicalSkillsComponent,
    SoftSkillsComponent,
    LanguagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
