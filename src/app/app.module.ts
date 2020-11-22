import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


//Rutas
import {app_routing} from './app.routes';


//Servicios

import {LibrosService} from './servicios/libros.service';
import {PeliculasService} from './servicios/peliculas.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { LibrosComponent } from './componentes/libros/libros.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';
import { LibroComponent } from './componentes/libro/libro.component';
import { PeliculaComponent } from './componentes/pelicula/pelicula.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    PerfilComponent,
    PeliculasComponent,
    LibrosComponent,
    FooterComponent,
    LibroComponent,
    PeliculaComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule
  ],
  providers: [
    LibrosService,
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
