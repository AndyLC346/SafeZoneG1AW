import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Users } from './components/users/users';
import { Usuarioregistrar } from './components/users/usuarioregistrar/usuarioregistrar';
import { Menu } from './components/menu/menu';
import { Cuenta } from './components/cuenta/cuenta';
import { Cuentaregistrar } from './components/cuenta/cuentaregistrar/cuentaregistrar';
import { Archivos } from './components/archivos/archivos';
import { Archivoregistrar } from './components/archivos/archivoregistrar/archivoregistrar';
import { Recomendacionregistrar } from './components/recomendacion/recomendacionregistrar/recomendacionregistrar';
import { Recomendacion } from './components/recomendacion/recomendacion';
import { Registrar } from './components/registrar/registrar';
import { BuscarArchivosXFecha } from './components/archivos/buscar-archivos-xfecha/buscar-archivos-xfecha';
import { Alerta } from './components/alerta/alerta';
import { Recurso } from './components/recurso/recurso';
import { Role } from './components/role/role';
import { APIcomponent } from './components/apicomponent/apicomponent';
import { Rollistar } from './components/role/rollistar/rollistar';
import { Rolregistrar } from './components/role/rolregistrar/rolregistrar';
import { Recursobuscar } from './components/recurso/recursobuscar/recursobuscar';
import { Recursolistar } from './components/recurso/recursolistar/recursolistar';
import { Recursoregistrar } from './components/recurso/recursoregistrar/recursoregistrar';
import { Recursoquery1 } from './components/recurso/recursoquery1/recursoquery1';
import { Recursoquery2 } from './components/recurso/recursoquery2/recursoquery2';
import { Alertalistar } from './components/alerta/alertalistar/alertalistar';
import { Alertaregistrar } from './components/alerta/alertaregistrar/alertaregistrar';
import { Alertabuscar } from './components/alerta/alertabuscar/alertabuscar';
import { Alertaquery1 } from './components/alerta/alertaquery1/alertaquery1';
import { Login } from './components/login/login';
import { guardseguridadGuard } from './guards/guardseguridad-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'registrar',
    component: Registrar,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'home',
    component: Home,
    //canActivate: [guardseguridadGuard],
  },
  {
    path: 'menu',
    component: Menu,
    //canActivate: [guardseguridadGuard],
  },
  {
    path: 'usuarios',
    component: Users,
    //canActivate: [guardseguridadGuard],
    children: [
      { path: 'registrar', component: Usuarioregistrar },
      { path: 'actualizar/:id', component: Usuarioregistrar },
    ],
  },
  {
    path: 'cuenta',
    component: Cuenta,
    //canActivate: [guardseguridadGuard],
    children: [
      { path: 'registrar', component: Cuentaregistrar },
      { path: 'actualizar/:id', component: Cuentaregistrar },
    ],
  },

  {
    path: 'archivos',
    component: Archivos,
    //canActivate: [guardseguridadGuard],
    children: [
      { path: 'registrar', component: Archivoregistrar },
      { path: 'actualizar/:id', component: Archivoregistrar },
      { path: 'buscarxfecha', component: BuscarArchivosXFecha },
    ],
  },

  {
    path: 'recomendaciones',
    component: Recomendacion,
    //canActivate: [guardseguridadGuard],
    children: [
      { path: 'registrar', component: Recomendacionregistrar },
      { path: 'actualizar/:id', component: Recomendacionregistrar },
    ],
  },

  {
    path: 'alertas',
    component: Alerta,
    //canActivate: [guardseguridadGuard],
    children: [
      { path: 'listar', component: Alertalistar },
      { path: 'registrar', component: Alertaregistrar },
      { path: 'editar/:id', component: Alertaregistrar },
      { path: 'buscar', component: Alertabuscar },
      { path: 'reporte1', component: Alertaquery1 },
    ],
  },
  {
    path: 'recursosducativos',
    component: Recurso,
    //canActivate: [guardseguridadGuard],
    children: [
      { path: 'listar', component: Recursolistar },
      { path: 'registrar', component: Recursoregistrar },
      { path: 'editar/:id', component: Recursoregistrar },
      { path: 'buscar', component: Recursobuscar },
      { path: 'reporte1', component: Recursoquery1 },
      { path: 'reporte2', component: Recursoquery2 },
    ],
  },

  {
    path: 'roles',
    component: Role,
    children: [
      { path: 'listar', component: Rollistar },
      { path: 'registrar', component: Rolregistrar },
      { path: 'editar/:id', component: Rolregistrar },
      { path: 'buscar', component: Recursobuscar },
    ],
  },

  {
    path: 'scan',
    component: APIcomponent,
  },
];
