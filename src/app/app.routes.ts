import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Users } from './components/users/users';
import { Usuarioregistrar } from './components/users/usuarioregistrar/usuarioregistrar';
import { TicketSoporte } from './models/TicketSoporte';
import { Ticketreportelistar } from './components/ticket-reporte/ticketreportelistar/ticketreportelistar';
import { Ticketreporteregistrar } from './components/ticket-reporte/ticketreporteregistrar/ticketreporteregistrar';
import { TicketReporte } from './components/ticket-reporte/ticket-reporte';

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
];
