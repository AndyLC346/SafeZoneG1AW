import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Users } from './components/users/users';
import { Usuarioregistrar } from './components/users/usuarioregistrar/usuarioregistrar';
import { Ticketreporteregistrar } from './components/ticket-reporte/ticketreporteregistrar/ticketreporteregistrar';
import { TicketReporte } from './components/ticket-reporte/ticket-reporte';
import { RespuestaSoporte } from './components/respuesta-soporte/respuesta-soporte';
import { Respuestasoportelistar } from './components/respuesta-soporte/respuestasoportelistar/respuestasoportelistar';

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
        path: 'registrar',
        component: TicketReporte, 
        children: [
            { path: 'news', component: Ticketreporteregistrar },
            { path: 'edits/:id', component: Ticketreporteregistrar },
        ],
    },
    {
        path: 'listar',
        component: RespuestaSoporte, 
        children: [
            { path: 'news', component: Respuestasoportelistar },
            { path: 'edits/:id', component: Respuestasoportelistar },
        ],
    },
];
