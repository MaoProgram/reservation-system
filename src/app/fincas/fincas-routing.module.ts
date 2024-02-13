import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreacionFincasComponent } from './creacion-fincas/creacion-fincas.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { FormularioReservaComponent } from '../formulario-reserva/formulario-reserva.component';

const routes: Routes = [
  { path: 'fincas', component: ReservationComponent },
  { path: 'fincaCreate', component: CreacionFincasComponent },
  { path: 'fincaEdit', component: FormularioReservaComponent },
  { path: 'fincaDetails/id', component: ReservationDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class fincaRoutingModule {}
