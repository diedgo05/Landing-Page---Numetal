import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeModule } from './home/home.module';
import { BandsModule } from './bands/bands.module';
import { SpecificBandModule } from './specific-band/specific-band.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BandsModule,
    SpecificBandModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
