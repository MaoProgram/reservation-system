import { Component } from '@angular/core';
import { FincasService } from '../fincas.service';
import { ReservationsService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.scss']
})
export class ReservationDetailsComponent {
  hayReservaciones: boolean = false;
  reserva: any;
  reservaciones: any;

  constructor(
    private fincasService: FincasService,
    private reservationsService: ReservationsService
  ) {}

  actualizarReserva(datosReserva: any) {
    this.reserva = datosReserva;
    this.hayReservaciones = true;
  }
}

