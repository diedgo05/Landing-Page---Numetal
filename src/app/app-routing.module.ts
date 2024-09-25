import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home-p/home.component';
import { BandsPComponent } from './bands/bands-p/bands-p.component';
import { DeftonesComponent } from './specific-band/deftones/deftones.component';
import { KornComponent } from './specific-band/korn/korn.component';
import { LimpComponent } from './specific-band/limp/limp.component';
import { LinkinComponent } from './specific-band/linkin/linkin.component';
import { SoadComponent } from './specific-band/soad/soad.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'bands' , component: BandsPComponent
  },
  {
    path:'deftones' , component:DeftonesComponent
  },
  {
    path:'korn' , component:KornComponent
  },
  {
    path:'limp' , component:LimpComponent
  },
  {
    path:'linkin' , component:LinkinComponent
  },
  {
    path:'soad', component:SoadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
