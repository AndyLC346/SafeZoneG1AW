import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { Auditoria } from '../../../models/Auditoria';
import { AuditoriaService } from '../../../services/auditoria-service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-auditoriaregistrar',
  templateUrl: './auditoriaregistrar.html',
  styleUrls: ['./auditoriaregistrar.css'],
})
export class AuditoriaRegistrarComponent implements OnInit {

  form: FormGroup;
  audit: Auditoria = new Auditoria();

  edicion = false;
  id = 0;

  constructor(
    private aS: AuditoriaService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    // inicializamos el form aquí por seguridad
    this.form = this.fb.group({
      codigo: [''],
      tipoAuditoria: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaAuditoria: ['', Validators.required],
      usuario: ['', Validators.required], // ID del usuario
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      if (this.edicion) {
        this.init();
      }
    });
  }

  aceptar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.audit.idAuditoria = this.form.value.codigo;
    this.audit.tipoAuditoria = this.form.value.tipoAuditoria;
    this.audit.descripcion = this.form.value.descripcion;
    this.audit.fechaAuditoria = this.form.value.fechaAuditoria;

    // si tu modelo usuario tiene 'id' como propiedad
    if (!this.audit.usuario) {
      this.audit.usuario = { id: this.form.value.usuario } as any;
    } else {
      (this.audit.usuario as any).id = this.form.value.usuario;
    }

    if (this.edicion) {
      this.aS.update(this.audit).subscribe(() => {
        this.aS.list().subscribe((data) => this.aS.setList(data));
        this.router.navigate(['auditorias']);
      });
    } else {
      this.aS.insert(this.audit).subscribe(() => {
        this.aS.list().subscribe((data) => this.aS.setList(data));
        this.router.navigate(['auditorias']);
      });
    }
  }

  init() {
    this.aS.listId(this.id).subscribe((data) => {
     
      this.form.patchValue({
        codigo: data.idAuditoria,
        tipoAuditoria: data.tipoAuditoria,
        descripcion: data.descripcion,
        fechaAuditoria: data.fechaAuditoria,
        usuario: data.usuario?.id ?? '',
      });
    }, err => {
      console.error('Error al cargar auditoría:', err);
    });
  }
}
