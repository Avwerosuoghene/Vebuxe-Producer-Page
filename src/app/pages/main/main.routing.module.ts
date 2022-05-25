import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoviesComponent } from './dashboard/movies/movies.component';
import { ProducersComponent } from './dashboard/producers/producers.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {
        path: 'dashboard',
        loadChildren: ()=> import('./dashboard/dashboard.module')
        .then(m => m.DashboardModule)
      },
      // {
      //   path: 'dashboard',
      //   component: DashboardComponent,
      //   children : [
      //     {path: '', redirectTo: 'movies'},
      //     {path: 'movies', component: MoviesComponent},
      //     {path: 'producers', component: ProducersComponent}
      //   ]
      // },

      {
        path: 'home-page',
        component: HomePageComponent

      }
    ]
  },



];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
