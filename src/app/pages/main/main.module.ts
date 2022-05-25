import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { MainComponent } from './main.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MainRoutingModule } from './main.routing.module';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    HomePageComponent,
    SidenavComponent,
  ],
  imports: [
    SharedModule,
    MainRoutingModule,
    FormsModule,
    // DashboardModule,
  ],
  providers: [],
})
export class MainModule { }
