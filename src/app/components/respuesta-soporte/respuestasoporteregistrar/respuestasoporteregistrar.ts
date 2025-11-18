import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,ReactiveFormsModule} from '@angular/forms';
import { TicketSoporte } from '../../../models/TicketSoporte';
import { RespuestaSoporteService } from '../../../services/respuesta-soporte-service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TicketSoporteService } from '../../../services/ticket-soporte-service';
import { RespuestaSoporte } from '../../../models/RespuestaSoporte';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-respuestasoporteregistrar',
  imports: [ReactiveFormsModule,MatInputModule, MatFormFieldModule,MatRadioModule,MatDatepickerModule,MatButtonModule,MatSelectModule,MatDatepickerModule],
  templateUrl: './respuestasoporteregistrar.html',
  styleUrl: './respuestasoporteregistrar.css',
})
export class Respuestasoporteregistrar implements OnInit {
  form:FormGroup=new FormGroup({});
  resp:RespuestaSoporte=new RespuestaSoporte();
  edicion:boolean=false;
  id:number=0;
  listaTickets:TicketSoporte[]=[];

  constructor(
    private rS:RespuestaSoporteService,
    private router:Router,
    private formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private tS:TicketSoporteService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.tS.list().subscribe((data) => {
      this.listaTickets = data;
    });
    this.form = this.formBuilder.group({
      codigo: [''],
      mensaje: ['', Validators.required],
      fecha: ['', Validators.required],
      fk:['',Validators.required]
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.resp.idRespuestaSoporte = this.form.value.codigo;
      this.resp.mensajeRespuestaSoporte = this.form.value.nombre;
      this.resp.fechacierreRespuestaSoporte = this.form.value.tipo;
      this.resp.ticketreporte.idSoporte=this.form.value.fk
      if (this.edicion) {
        this.rS.update(this.resp).subscribe((data) => {
          this.rS.list().subscribe((data) => {
            this.rS.setList(data);
          });
        });
      } else {
        this.rS.insert(this.resp).subscribe((data) => {
          this.rS.list().subscribe((data) => {
            this.rS.setList(data);
          });
        });
      }
      this.router.navigate(['respuesta-soporte']);
    }
  }

  init() {
    if (this.edicion) {
      this.rS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          codigo: new FormControl(data.idRespuestaSoporte),
          mensaje: new FormControl(data.mensajeRespuestaSoporte),
          fecha: new FormControl(data.fechacierreRespuestaSoporte),
          fk:new FormControl(data.ticketreporte.idSoporte)
        });
      });
    }
  }
}

