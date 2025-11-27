import { Component } from '@angular/core';
import { LogAccesoListar } from './log-accesolistar/log-accesolistar';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-log-acceso',
  imports: [RouterOutlet, LogAccesoListar],
  templateUrl: './log-acceso.html',
  styleUrl: './log-acceso.css',
})
export class LogAcceso {
  constructor(public route:ActivatedRoute) {}
}
