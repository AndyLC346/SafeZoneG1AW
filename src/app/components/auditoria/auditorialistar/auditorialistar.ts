import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Auditoria } from '../../../models/Auditoria';
import { AuditoriaService } from '../../../services/auditoria-service';

@Component({
  selector: 'app-auditorialistar',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './auditorialistar.html',
  styleUrls: ['./auditorialistar.css'],
})
export class AuditoriaListar implements OnInit {
  dataSource: MatTableDataSource<Auditoria> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'fecha', 'tipo', 'descripcion', 'usuario', 'acciones'];

  constructor(private aS: AuditoriaService) {}

  ngOnInit(): void {
    this.aS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.aS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  eliminar(id: number) {
    this.aS.delete(id).subscribe(() => {
      this.aS.list().subscribe((data) => {
        this.aS.setList(data);
      });
    });
  }
}
