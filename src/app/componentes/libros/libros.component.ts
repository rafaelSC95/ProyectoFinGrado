import { Component, OnInit } from '@angular/core';
import {LibrosService} from '../../servicios/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros: Object = [];

  constructor( private _librosServicio: LibrosService) { }

  ngOnInit(): void {

    this._librosServicio.getLibros().subscribe( data => {
      this.libros = data;
      console.log(this.libros);
    });
  }

}
