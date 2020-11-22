import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LibrosService {

  private libros: any = [] ;
  constructor(private http:HttpClient) {
    console.log("Servicio listo para usar !!!");
   }


   getLibros(){
     this.libros = this.http.get('./assets/json/datos.json');
     console.log(this.libros);
     return this.libros;
   }

   getLibro(idx:number){
     console.log(idx);
     console.log(this.libros);
     console.log(this.libros[idx]);
     return this.libros[idx];
   }
}
