import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './fincas/reservation/reservation.component'; 
import { LogInComponent } from './login/log-in/log-in.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LogInComponent },
  { path: 'reservation', component: ReservationComponent },
 
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      {
        path: 'fincas',
        loadChildren: () =>
          import('./fincas/fincas.module').then((m) => m.FincasModule),
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
