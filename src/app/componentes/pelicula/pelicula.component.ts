import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PeliculasService} from '../../servicios/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula: any = {};
  constructor(private activatedRoute:ActivatedRoute,private _peliculaServicio:PeliculasService) {
    this.activatedRoute.params.subscribe(params => {
      this.pelicula = this._peliculaServicio.getPelicula(params['id']);
    });
  }

  ngOnInit(): void {
  }

}
