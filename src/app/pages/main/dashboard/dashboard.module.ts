import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

import { DashboardComponent } from './dashboard.component';
import { ProducersComponent } from './producers/producers.component';
import { MoviesComponent } from './movies/movies.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ProducersComponent,
    MoviesComponent
  ],
  imports: [
    SharedModule,
    // RouterModule.forChild([{path: '', component: DashboardComponent, children: [
    //   {path: '', component: MoviesComponent}
    // ]}]),
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
