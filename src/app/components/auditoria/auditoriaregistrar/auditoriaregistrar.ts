import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Auditoria } from '../../../models/Auditoria';
import { AuditoriaService } from '../../../services/auditoria-service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-auditoria-registrar',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
  templateUrl: './auditoriaregistrar.html',
  styleUrls: ['./auditoriaregistrar.css'],
  providers: [provideNativeDateAdapter()],
})
export class AuditoriaRegistrar implements OnInit {
  form: FormGroup = new FormGroup({});
  aud: Auditoria = new Auditoria();

  edicion: boolean = false;
  id: number = 0;

  constructor(
    private aS: AuditoriaService,
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
      fechaAuditoria: ['', Validators.required],
      tipoAuditoria: ['', Validators.required],
      descripcion: ['', Validators.required],
      usuarioId: ['', Validators.required],  // Asumiendo que seleccionas usuario por ID
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      this.aud.idAuditoria = this.id;  // Si edición, ID ya viene
      this.aud.fechaAuditoria = this.form.value.fechaAuditoria;
      this.aud.tipoAuditoria = this.form.value.tipoAuditoria;
      this.aud.descripcion = this.form.value.descripcion;
      // usuario: asignar un objeto Users, aquí simplificado
      this.aud.usuario = { id: this.form.value.usuarioId } as any;

      if (this.edicion) {
        this.aS.update(this.aud).subscribe(() => {
          this.aS.list().subscribe((data) => {
            this.aS.setList(data);
          });
        });
      } else {
        this.aS.insert(this.aud).subscribe(() => {
          this.aS.list().subscribe((data) => {
            this.aS.setList(data);
          });
        });
      }
      this.router.navigate(['auditorias']);
    }
  }

  init() {
    if (this.edicion) {
      this.aS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          fechaAuditoria: new FormControl(data.fechaAuditoria),
          tipoAuditoria: new FormControl(data.tipoAuditoria),
          descripcion: new FormControl(data.descripcion),
          usuarioId: new FormControl(data.usuario?.id),
        });
      });
    }
  }
}
