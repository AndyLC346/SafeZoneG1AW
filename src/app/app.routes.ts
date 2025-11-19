import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Users } from './components/users/users';
import { Usuarioregistrar } from './components/users/usuarioregistrar/usuarioregistrar';
import { Usuarioeliminar } from './components/users/usuarioeliminar/usuarioeliminar';
import { Menu } from './components/menu/menu';
import { Cuenta } from './components/cuenta/cuenta';

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
    }
];
