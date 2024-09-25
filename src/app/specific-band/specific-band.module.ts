import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeftonesComponent } from './deftones/deftones.component';
import { LimpComponent } from './limp/limp.component';
import { KornComponent } from './korn/korn.component';
import { LinkinComponent } from './linkin/linkin.component';
import { SoadComponent } from './soad/soad.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    DeftonesComponent,
    LimpComponent,
    KornComponent,
    LinkinComponent,
    SoadComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SpecificBandModule { }
