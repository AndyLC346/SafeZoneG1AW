import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  constructor(private router: Router) { }

  Registrar() {
    this.router.navigate(['/registrar']);
  }

  IniciarSesion() {
    this.router.navigate(['/login']);
  }
}
