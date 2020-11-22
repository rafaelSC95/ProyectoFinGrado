import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PeliculasService {

  private peliculas: any = [] ;
  constructor(private http:HttpClient) {
    console.log("Servicio listo para usar !!!");
  }

  getPeliculas(){
    this.peliculas =  this.http.get('./assets/json/datos.json');
    return this.peliculas;
  }

  getPelicula(idx:number){
    return this.peliculas[idx];
  }
}
