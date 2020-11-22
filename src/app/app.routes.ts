import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './componentes/inicio/inicio.component';
import {PerfilComponent} from './componentes/perfil/perfil.component';
import {LibrosComponent} from './componentes/libros/libros.component';
import {PeliculasComponent} from './componentes/peliculas/peliculas.component';
import {LibroComponent} from './componentes/libro/libro.component';
import {PeliculaComponent} from './componentes/pelicula/pelicula.component';
import {LoginComponent} from './componentes/login/login.component';
import {RegistroComponent} from './componentes/registro/registro.component';

const APP_ROUTES: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'libro/:id', component: LibroComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const app_routing = RouterModule.forRoot(APP_ROUTES, { useHash: true});
