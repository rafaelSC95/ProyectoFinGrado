import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../servicios/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {


  peliculas: Object = [];

  constructor( private _peliculasServicio: PeliculasService) { }

  ngOnInit(): void {
    this._peliculasServicio.getPeliculas().subscribe( data => {
      this.peliculas = data;
      console.log(this.peliculas);
    });
  }

}
