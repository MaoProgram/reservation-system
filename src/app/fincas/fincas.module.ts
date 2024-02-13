import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { fincaRoutingModule } from './fincas-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CreacionFincasComponent } from './creacion-fincas/creacion-fincas.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { FormularioReservaComponent } from '../formulario-reserva/formulario-reserva.component';


@NgModule({
  declarations: [
    CreacionFincasComponent,
    ReservationComponent,
    ReservationDetailsComponent,
    FormularioReservaComponent
  ],
  imports: [
    CommonModule,
    fincaRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
    MatSidenavModule,
    ReactiveFormsModule,
  ],
})
export class FincasModule {}
