import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Expediente } from '../models/Expediente';

@Injectable({
  providedIn: 'root'
})
export class ExpedienteService {
  globalRoute = 'http://localhost:8080/expediente'
  constructor(private http: HttpClient) {}
  //apunta a los endpoints o metodos del back
  getExpedientes(){
    return this.http.get<Expediente[]>(this.globalRoute + 'todos')
  }
  updatgeExpedientes(expediente:Expediente){
    return this.http.post<Expediente>(this.globalRoute + 'actualizar', expediente, {
      observe: 'response'
    })
  }
  deleteExpedientes(numExpediente:number){
    return this.http.post<Boolean>(this.globalRoute + numExpediente, {
      observe: 'response'
    })
  }
  createExpedientes(expediente:Expediente){
    return this.http.post<Expediente>(this.globalRoute + 'nuevo', expediente,{
      observe:'response'
    })
  }
}
