import { Routes } from '@angular/router';
<<<<<<< Updated upstream

export const routes: Routes = [];
=======
import { Home } from './components/home/home';
import { Users } from './components/users/users';
import { Usuarioregistrar } from './components/users/usuarioregistrar/usuarioregistrar';
import { Usuarioeliminar } from './components/users/usuarioeliminar/usuarioeliminar';
import { Menu } from './components/menu/menu';
import { Cuenta } from './components/cuenta/cuenta';
import { Alerta } from './components/alerta/alerta';
import { Alertaregistrar } from './components/alerta/alertaregistrar/alertaregistrar';
import { Alertalistar } from './components/alerta/alertalistar/alertalistar';

export const routes: Routes = [
    {
        path: '', //ruta por default
        component: Home,
        pathMatch: 'full',
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
            { path: 'eliminar/:id', component: Usuarioeliminar },
        ]
    },
    {
        path:'cuenta',
        component: Cuenta,
    },
    {
        path: 'alertas',
        component: Alerta,
        children: [
            { path: 'alertaregistrar', component: Alertaregistrar },
            { path: 'alertalistar', component: Alertalistar },
        ],
    },
];
>>>>>>> Stashed changes
