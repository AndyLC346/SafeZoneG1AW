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
import { Inicio } from './components/inicio/inicio';
import { Registrar } from './components/registrar/registrar';
import { Login } from './components/login/login';

export const routes: Routes = [
    {
        path: '', //ruta por default
        redirectTo: 'inicio',
        pathMatch: 'full',
    },
    {
    path: 'inicio',
    component: Inicio,
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
    },
    {
        path: 'menu',
        component: Menu,
    },
    {
        path: 'usuarios',
        component: Users,
        children: [
            { path: 'registrar', component: Usuarioregistrar },
            { path: 'actualizar/:id', component: Usuarioregistrar },
        ]
    },
    {
        path:'cuenta',
        component: Cuenta,
        children: [
            { path: 'registrar', component: Cuentaregistrar },
            { path: 'actualizar/:id', component: Cuentaregistrar },
        ]
    },

    {
        path:'archivos',
        component: Archivos,
        children: [
            { path: 'registrar', component: Archivoregistrar },
            { path: 'actualizar/:id', component: Archivoregistrar },
        ]
    },

    {
        path:'recomendaciones',
        component: Recomendacion,
        children: [
            { path: 'registrar', component: Recomendacionregistrar },
            { path: 'actualizar/:id', component: Recomendacionregistrar },
        ]
    }
];
