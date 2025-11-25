import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { LogAcceso } from '../models/LogAcceso';
import { Observable, Subject } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class LogAccesoService {
  private url = `${base_url}/logacceso`;

  private listaCambio = new Subject<LogAcceso[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<LogAcceso[]>(this.url);
  }

  insert(l: LogAcceso): Observable<string> {
    return this.http.post(this.url, l, { responseType: 'text' });
  }

  update(l: LogAcceso): Observable<string> {
    return this.http.put(this.url, l, { responseType: 'text' });
  }

  delete(id: number): Observable<string> {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }

  listId(id: number) {
    return this.http.get<LogAcceso>(`${this.url}/${id}`);
  }

  setList(listaNueva: LogAcceso[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  // Método de búsqueda personalizado
  buscarPorUsuarioYRango(id: number, fi: string, ff: string): Observable<LogAcceso[]> {
    return this.http.get<LogAcceso[]>(`${this.url}/buscarLogsPorusuarioyrangofechas?id=${id}&fi=${fi}&ff=${ff}`);
  }
}

