import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { BandsPComponent } from './bands-p/bands-p.component';



@NgModule({
  declarations: [
    CardsComponent,
    BandsPComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BandsModule { }
