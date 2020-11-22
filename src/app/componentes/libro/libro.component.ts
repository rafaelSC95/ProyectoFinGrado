import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LibrosService} from '../../servicios/libros.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  libro:any = {};

  constructor(private activatedRoute:ActivatedRoute,private _libroServicio:LibrosService) {
    this.activatedRoute.params.subscribe(params => {
      this.libro = this._libroServicio.getLibro(params['id']);
      console.log(this.libro);
    });
  }

  ngOnInit(): void {
  }

}
