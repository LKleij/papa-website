import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ServiceComponent } from './services/service/service.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { Services2Component } from './services2/services2.component';
import { Service2Component } from './services2/service2/service2.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    AboutMeComponent,
    ServiceComponent,
    ContactFormComponent,
    TopNavigationComponent,
    HeaderMainComponent,
    Services2Component,
    Service2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
