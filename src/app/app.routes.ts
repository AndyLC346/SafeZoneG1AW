import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Users } from './components/users/users';
import { Usuarioregistrar } from './components/users/usuarioregistrar/usuarioregistrar';
import { AuditoriaRegistrarComponent } from './components/auditoria/auditoriaregistrar/auditoriaregistrar';
import { Auditoria } from './components/auditoria/auditoria';
import { Cuentaregistrar } from './components/cuenta/cuentaregistrar/cuentaregistrar';
import { LogAcceso } from './components/log-acceso/log-acceso';
import { LogAccesoRegistrar } from './components/log-acceso/log-accesoregistrar/log-accesoregistrar';
import { LogAccesoBuscarComponent } from './components/log-acceso/logaccesobuscar/logaccesobuscar';
import { CuentaBuscarComponent } from './components/cuenta/cuentabuscar/cuentabuscar';
import { AuditoriaBuscarComponent } from './components/auditoria/auditoriabuscar/auditoriabuscar';
import { Menu } from './components/menu/menu';
import { Archivos } from './components/archivos/archivos';
import { Archivoregistrar } from './components/archivos/archivoregistrar/archivoregistrar';
import { Recomendacionregistrar } from './components/recomendacion/recomendacionregistrar/recomendacionregistrar';
import { Recomendacion } from './components/recomendacion/recomendacion';
import { Inicio } from './components/inicio/inicio';
import { Registrar } from './components/registrar/registrar';
import { Login } from './components/login/login';
import { BuscarArchivosXFecha } from './components/archivos/buscar-archivos-xfecha/buscar-archivos-xfecha';
import { Cuenta } from './components/cuenta/cuenta';



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
            {path: 'buscarxfecha', component: BuscarArchivosXFecha},
        ]
    },

    {
        path:'recomendaciones',
        component: Recomendacion,
        children: [
            { path: 'registrar', component: Recomendacionregistrar },
            { path: 'actualizar/:id', component: Recomendacionregistrar },
        ]
    },
    {
        path: 'auditorias',
        component: Auditoria,
        children: [
            { path: 'nuevo', component: AuditoriaRegistrarComponent },
            { path: 'edicion/:id', component: AuditoriaRegistrarComponent },
            { path: 'buscar', component: AuditoriaBuscarComponent },

        ]
    },
    {
        path: 'cuentas',
        component: Cuenta,
        children: [
            { path: 'nuevo', component: Cuentaregistrar },
            { path: 'edicion/:id', component: Cuentaregistrar },
            { path: 'buscar', component: CuentaBuscarComponent },
        ]
    },
        {
        path: 'logacceso',
        component: LogAcceso,
        children: [
            { path: 'nuevo', component: LogAccesoRegistrar },
            { path: 'edicion/:id', component: LogAccesoRegistrar },
            { path: 'buscar', component: LogAccesoBuscarComponent },
        ]
    }
];
