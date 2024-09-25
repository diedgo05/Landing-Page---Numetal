import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home-p/home.component';
import { MainComponent } from './main/main.component';
import { SongsComponent } from './songs/songs.component';



@NgModule({
  declarations: [
  
    HomeComponent,
    MainComponent,
    SongsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
