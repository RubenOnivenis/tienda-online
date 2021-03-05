import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface cestaDatos {
  id_cesta?:number,
  id_usuario:number,
  id_producto:number,
}

@Injectable({
  providedIn: 'root'
})

export class CestaService {

  API_URI = 'http://localhost:8080/api';

  constructor(
    private http:HttpClient
  ) { }

  productosCesta(id_cesta:number){
    return this.http.get(`${this.API_URI}/cestaDatos/${id_cesta}`);
  }

  aniadirCesta(cesta: cestaDatos){
    return this.http.post(`${this.API_URI}/cesta`, cesta);
  }

  borrarProductoCesta(id_cesta: number){
    return this.http.delete(`${this.API_URI}/cesta/${id_cesta}`);
  }
}
