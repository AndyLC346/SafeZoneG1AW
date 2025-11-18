// src/app/components/cuenta/cuentaregistrar/cuentaregistrar.component.ts
import { Component, OnInit } from '@angular/core';
import { CuentaService } from '../../../services/cuenta-service';
import { Cuenta } from '../../../models/Cuenta';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cuentaregistrar',
  standalone: true, 
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    CommonModule
  ],
  templateUrl: './cuentaregistrar.component.html',
  styleUrl: './cuentaregistrar.component.css',
})
export class CuentaRegistrarComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  cuenta: Cuenta = new Cuenta();

  constructor(
    private formBuilder: FormBuilder,
    private cS: CuentaService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      idCuenta: [''],
      servicioCuenta: ['', Validators.required],
      nombreCuenta: ['', Validators.required],
      estadoCuenta: [true],
      fecharegistroCuenta: [new Date()],
      idUsuario: ['', Validators.required]
    });

  }

  aceptar(): void {
    if (this.form.valid) {
      this.cuenta.servicioCuenta = this.form.value.servicioCuenta;
      this.cuenta.nombreCuenta = this.form.value.nombreCuenta;
      this.cuenta.estadoCuenta = this.form.value.estadoCuenta;
      this.cuenta.fecharegistroCuenta = this.form.value.fecharegistroCuenta;

      this.cuenta.usuario.id = this.form.value.idUsuario;

      this.cS.insert(this.cuenta).subscribe({
        next: (data) => {
          this.cS.list().subscribe((listData) => {
            this.cS.setList(listData);
            this.router.navigate(['cuentas']);
          });
        },
        error: (err) => {
          console.error("Error al registrar cuenta:", err);
        }
      });
    }
  }

  obtenerControl(name: string) {
    return this.form.controls[name];
  }
}
