import { Component, OnInit } from '@angular/core';
import { BuscarRecomendacionXCategoriaDTO } from '../../../models/BuscarRecomendacionXCategoriaDTO';
import { RecomendacionService } from '../../../services/recomendacion-service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-buscar-recomendacion-xcategoria',
  imports: [FormsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    CommonModule, BaseChartDirective],
  templateUrl: './buscar-recomendacion-xcategoria.html',
  styleUrl: './buscar-recomendacion-xcategoria.css',
})
export class BuscarRecomendacionXCategoria implements OnInit {

  categoria: string = "";
  reporte: BuscarRecomendacionXCategoriaDTO[] = [];

  // 📌 Variables del gráfico
  barChartLabels: string[] = [];
  barChartType: any = 'bar';
  barChartData = {
    datasets: [
      {
        label: 'Cantidad de recomendaciones',
        data: [] as number[],
        backgroundColor: ['#1976d2'], // color opcional
      }
    ]
  };

  constructor(private recomendacionService: RecomendacionService) {}

  ngOnInit(): void {}

  buscar() {
    this.recomendacionService.buscarPorCategoria(this.categoria).subscribe({
      next: (data) => {
        this.reporte = data;

        // Llenar gráfico con nuevos datos
        this.barChartLabels = data.map(x => x.username);
        this.barChartData.datasets[0].data = data.map(x => x.cantidadRecomendaciones);
      },
      error: () => {
        alert("No existen datos para esa categoría.");
        this.reporte = [];
        this.barChartLabels = [];
        this.barChartData.datasets[0].data = [];
      }
    });
  }


}
