import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './Componentes/banner/banner.component';
import { AboutComponent } from './Componentes/about/about.component';
import { TracksComponent } from './Componentes/tracks/tracks.component';
import { WorkExperienceComponent } from './Componentes/work-experience/work-experience.component';
import { ContactComponent } from './Componentes/contact/contact.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { PathTerminalComponent } from './Componentes/path-terminal/path-terminal.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AboutComponent,
    TracksComponent,
    WorkExperienceComponent,
    ContactComponent,
    FooterComponent,
    PathTerminalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
