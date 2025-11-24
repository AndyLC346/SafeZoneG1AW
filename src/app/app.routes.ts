import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Users } from './components/users/users';
import { Usuarioregistrar } from './components/users/usuarioregistrar/usuarioregistrar';
import { Ticketreporteregistrar } from './components/ticket-reporte/ticketreporteregistrar/ticketreporteregistrar';
import { TicketReporte } from './components/ticket-reporte/ticket-reporte';
import { RespuestaSoporte } from './components/respuesta-soporte/respuesta-soporte';
import { Respuestasoportelistar } from './components/respuesta-soporte/respuestasoportelistar/respuestasoportelistar';
import { Ticketreportelistar } from './components/ticket-reporte/ticketreportelistar/ticketreportelistar';
import { Respuestasoporteregistrar } from './components/respuesta-soporte/respuestasoporteregistrar/respuestasoporteregistrar';

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
        path: 'tickets',
        component: TicketReporte, 
        children: [
            { path: 'create', component: Ticketreporteregistrar },
            { path: 'edits/:id', component: Ticketreporteregistrar },
            { path: '' , component: Ticketreportelistar},
        ],
    },
    {
        path: 'respuestas',
        component: RespuestaSoporte, 
        children: [
            { path: 'create', component: Respuestasoporteregistrar },
            { path: 'edits/:id', component: Respuestasoporteregistrar },
            { path: '' , component: Respuestasoportelistar},
        ],
    },
];
