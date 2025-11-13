import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Auditoria } from '../models/Auditoria';
import { Observable, Subject } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class AuditoriaService implements OnInit {
  private url = `${base_url}/auditorias`;

  private listaCambio = new Subject<Auditoria[]>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  list() {
    return this.http.get<Auditoria[]>(this.url);
  }

  insert(a: Auditoria): Observable<string> {
    return this.http.post(this.url, a, { responseType: 'text' });
  }

  setList(listaNueva: Auditoria[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<Auditoria>(`${this.url}/${id}`);
  }

  update(a: Auditoria) {
    return this.http.put(`${this.url}`, a, { responseType: 'text' });
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }
}
