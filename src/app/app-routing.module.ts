import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { BandsPComponent } from './bands/bands-p/bands-p.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'bands' , component: BandsPComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
