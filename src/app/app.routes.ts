import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Users } from './components/users/users';
import { Usuarioregistrar } from './components/users/usuarioregistrar/usuarioregistrar';
import { AuditoriaRegistrarComponent } from './components/auditoria/auditoriaregistrar/auditoriaregistrar';
import { Auditoria } from './components/auditoria/auditoria';
import { Cuenta } from './components/cuenta/cuenta';
import { Cuentaregistrar } from './components/cuenta/cuentaregistrar/cuentaregistrar';
import { LogAcceso } from './components/log-acceso/log-acceso';
import { LogAccesoRegistrar } from './components/log-acceso/log-accesoregistrar/log-accesoregistrar';
import { LogAccesoBuscarComponent } from './components/log-acceso/logaccesobuscar/logaccesobuscar';
import { CuentaBuscarComponent } from './components/cuenta/cuentabuscar/cuentabuscar';
import { AuditoriaBuscarComponent } from './components/auditoria/auditoriabuscar/auditoriabuscar';


export const routes: Routes = [
    {
        path: '',
        component: Home,
        pathMatch: 'full',
    },
    {
        path: 'usuarios',
        component: Users,
        children: [
            { path: 'news', component: Usuarioregistrar },
            { path: 'edits/:id', component: Usuarioregistrar },
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
