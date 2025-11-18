
import { Component, OnInit } from '@angular/core';
import { Cuenta } from '../../../models/Cuenta';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CuentaService } from '../../../services/cuenta-service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cuentalistar',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './cuentalistar.component.html',
  styleUrl: './cuentalistar.component.css',
})
export class CuentaListarComponent implements OnInit {

  dataSource: MatTableDataSource<Cuenta> = new MatTableDataSource();


  displayedColumns: string[] = [
    'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'
  ];

  constructor(private cS: CuentaService) {}
  ngOnInit(): void {
    this.cS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.cS.list().subscribe((data) => {
      this.cS.setList(data);
    });
  }

  eliminar(id: number) {
    this.cS.delete(id).subscribe(() => {
      this.cS.list().subscribe(data => {
        this.cS.setList(data);
      });
    });
  }
}
