import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServicesComponent } from './services/services.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ServiceComponent } from './services/service/service.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { HeaderMainComponent } from './header-main/header-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ServicesComponent,
    AboutMeComponent,
    ServiceComponent,
    ContactFormComponent,
    TopNavigationComponent,
    HeaderMainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
