import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Users } from './components/users/users';
import { Usuarioregistrar } from './components/users/usuarioregistrar/usuarioregistrar';
import { Alerta } from './components/alerta/alerta';
import { Alertaregistrar } from './components/alerta/alertaregistrar/alertaregistrar';
import { Alertalistar } from './components/alerta/alertalistar/alertalistar';
import { Alertabuscar } from './components/alerta/alertabuscar/alertabuscar';
import { Alertaquery1 } from './components/alerta/alertaquery1/alertaquery1';
import { Recursobuscar } from './components/recurso/recursobuscar/recursobuscar';
import { Recursolistar } from './components/recurso/recursolistar/recursolistar';
import { Recursoregistrar } from './components/recurso/recursoregistrar/recursoregistrar';
import { Recurso } from './components/recurso/recurso';
import { Recursoquery2 } from './components/recurso/recursoquery2/recursoquery2';
import { Recursoquery1 } from './components/recurso/recursoquery1/recursoquery1';

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
        ],
    },
     {
        path: 'alertas',
        component: Alerta,
        children: [
            { path: 'listar', component: Alertalistar },
            { path: 'registrar', component: Alertaregistrar },
            { path: 'editar/:id', component: Alertaregistrar },
            { path: 'buscar', component: Alertabuscar },
             {path: 'reporte1',component: Alertaquery1,},
        ],
    },
     {
        path: 'recursosducativos',
        component: Recurso,
        children: [
            { path: 'listar', component: Recursolistar },
            { path: 'registrar', component: Recursoregistrar },
            { path: 'editar/:id', component: Recursoregistrar },
            { path: 'buscar', component: Recursobuscar },
            {path: 'reporte1',component: Recursoquery1,},
            {path: 'reporte2',component: Recursoquery2,},
           
        ],
    },
       

];
