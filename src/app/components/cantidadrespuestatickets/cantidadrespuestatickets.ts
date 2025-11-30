import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { TicketSoporteService } from '../../services/ticket-soporte-service';

@Component({
  selector: 'app-cantidadrespuestatickets',
  imports: [MatIconModule,BaseChartDirective],
  templateUrl: './cantidadrespuestatickets.html',
  styleUrl: './cantidadrespuestatickets.css',
})
export class Cantidadrespuestatickets implements OnInit {
  hasDate=false;
  barChartOptions:ChartOptions={
    responsive:true,
  };
  barChartLabels:string[]=[];
  barChartType:ChartType='bar';
  barChartLegend=true;
  barChartData:ChartDataset[]=[];

  constructor(private tS:TicketSoporteService){}

  ngOnInit(): void {
    this.tS.getCantidad().subscribe((data)=>{
      console.log(data); 
      if(data.length>0){
        this.hasDate=true;
        this.barChartLabels=data.map((item)=>item.IdRespuestaSoporte.toString());
        this.barChartData=[
          {
          data:data.map((item)=>item.idTicket),
          label:'Cantidad de Tickets por Respuesta',
          backgroundColor:[
            'green',
            'blue',
          ],
        }
      ];
      } else{
          this.hasDate=false;
      }
    })
  }
}
