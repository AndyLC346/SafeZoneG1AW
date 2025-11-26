import { Component } from '@angular/core';
import { ArchivoService } from '../../../services/archivo-service';
import { BuscarArchivoXFechaDTO } from '../../../models/BuscarArchivoXFechaDTO';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-total-archivos-xusuario',
  imports: [FormsModule],
  templateUrl: './total-archivos-xusuario.html',
  styleUrl: './total-archivos-xusuario.css',
})
export class TotalArchivosXUsuario {
  fechaInicio: string = "";
  fechaFin: string = "";
  resultado: BuscarArchivoXFechaDTO[] = [];

  constructor(private archivoService: ArchivoService) {}

  ngOnInit(): void {}

  buscar() {
    if (!this.fechaInicio || !this.fechaFin) {
      console.warn("⚠ Debes seleccionar ambas fechas");
      return;
    }

    this.archivoService.buscarPorFechas(this.fechaInicio, this.fechaFin).subscribe({
      next: (data) => {
        console.log("📥 Datos recibidos desde backend:", data);
        this.resultado = data;
      },
      error: (err) => {
        console.error("❌ Error buscando archivos:", err);
      }
    });
  }
}
