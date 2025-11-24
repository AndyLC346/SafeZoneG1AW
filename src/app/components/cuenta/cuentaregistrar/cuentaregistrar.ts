import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Cuenta } from '../../../models/Cuenta';
import { CuentaService } from '../../../services/cuenta-service';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select'; // Para el estado (Activo/Inactivo)

@Component({
  selector: 'app-cuentaregistrar',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSelectModule,
    RouterLink
  ],
  templateUrl: './cuentaregistrar.html',
  providers: [provideNativeDateAdapter()],
  styleUrls: ['./cuentaregistrar.css'],
})
export class Cuentaregistrar implements OnInit {
  form: FormGroup = new FormGroup({});
  cuenta: Cuenta = new Cuenta();
  edicion: boolean = false;
  id: number = 0;

  // Opciones para el estado
  listaEstados = [
    { value: true, viewValue: 'Activo' },
    { value: false, viewValue: 'Inactivo' },
  ];

  constructor(
    private cS: CuentaService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      codigo: [''],
      nombreCuenta: ['', Validators.required],
      servicioCuenta: ['', Validators.required],
      estadoCuenta: [true, Validators.required],
      fecharegistroCuenta: [new Date(), Validators.required],
      usuario: ['', Validators.required],
    });
  }

  aceptar(): void {
    if (this.form.valid) {

      this.cuenta.idCuenta = this.edicion ? this.id : 0;

      this.cuenta.nombreCuenta = this.form.value.nombreCuenta;
      this.cuenta.servicioCuenta = this.form.value.servicioCuenta;
      this.cuenta.estadoCuenta = this.form.value.estadoCuenta;
      this.cuenta.fecharegistroCuenta = this.form.value.fecharegistroCuenta;

      this.cuenta.usuario = { id: this.form.value.usuario } as any;

      if (this.edicion) {
        this.cS.update(this.cuenta).subscribe(() => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
          this.router.navigate(['cuentas']);
        });
      } else {
        this.cS.insert(this.cuenta).subscribe(() => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
          this.router.navigate(['cuentas']);
        });
      }
    }
  }

  init() {
    if (this.edicion) {
      this.cS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          codigo: new FormControl(data.idCuenta),
          nombreCuenta: new FormControl(data.nombreCuenta),
          servicioCuenta: new FormControl(data.servicioCuenta),
          estadoCuenta: new FormControl(data.estadoCuenta),
          fecharegistroCuenta: new FormControl(data.fecharegistroCuenta),
          usuario: new FormControl(data.usuario.id),
        });
      });
    }
  }
}
