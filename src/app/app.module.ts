import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServicesComponent } from './services/services.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceComponent } from './services/service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ServicesComponent,
    AboutMeComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
