import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Cuentalistar } from './cuentalistar/cuentalistar';

@Component({
  selector: 'app-cuenta',
  imports: [RouterOutlet, Cuentalistar],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css',
})
export class Cuenta {
  constructor(public route:ActivatedRoute) {}
}
