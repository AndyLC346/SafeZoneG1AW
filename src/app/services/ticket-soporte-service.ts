import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environment/environment';
import { Observable, Subject } from 'rxjs';
import { TicketSoporte } from '../models/TicketSoporte';
import { HttpClient } from '@angular/common/http';

const base_url=environment.base
@Injectable({
  providedIn: 'root',
})
export class TicketSoporteService implements OnInit{

  private url=`${base_url}/ticketsoporte`

  private listaCambio=new Subject<TicketSoporte[]>();

  constructor(private http:HttpClient){}
  ngOnInit(): void {}
  list() {
    return this.http.get<TicketSoporte[]>(this.url);
  }

  insert(t:TicketSoporte):Observable<string>{
    return this.http.post(this.url,t,{responseType:'text'});
  }

  setList(listaNueva:TicketSoporte[]){
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  listId(id:number){
    return this.http.get<TicketSoporte>(`${this.url}/${id}`);
  }

  update(t:TicketSoporte){
    return this.http.put(`${this.url}`,t,{responseType:'text'});
  }

  delete(id:number){
    return this.http.delete(`${this.url}/${id}`,{responseType:'text'})
  }
}
