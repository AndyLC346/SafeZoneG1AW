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
import { Autenticador } from './components/autenticador/autenticador';
import { Cuentalistar } from './components/cuenta/cuentalistar/cuentalistar';
import { CuentaBuscarComponent } from './components/cuenta/cuentabuscar/cuentabuscar';
import { LogAccesoListar } from './components/log-acceso/log-accesolistar/log-accesolistar';
import { LogAccesoRegistrar } from './components/log-acceso/log-accesoregistrar/log-accesoregistrar';
import { LogAccesoBuscarComponent } from './components/log-acceso/logaccesobuscar/logaccesobuscar';
import { Auditoria } from './components/auditoria/auditoria';
import { LogAcceso } from './components/log-acceso/log-acceso';
import { TotalArchivosXUsuario } from './components/users/total-archivos-xusuario/total-archivos-xusuario';
import { AuditoriaListar } from './components/auditoria/auditorialistar/auditorialistar';
import { AuditoriaBuscarComponent } from './components/auditoria/auditoriabuscar/auditoriabuscar';
import { AuditoriaRegistrarComponent } from './components/auditoria/auditoriaregistrar/auditoriaregistrar';
import { seguridadGuardGuard } from './guard/seguridad-guard-guard';
import { TicketReporte } from './components/ticket-reporte/ticket-reporte';
import { Ticketreporteregistrar } from './components/ticket-reporte/ticketreporteregistrar/ticketreporteregistrar';
import { Ticketreportelistar } from './components/ticket-reporte/ticketreportelistar/ticketreportelistar';
import { RespuestaSoporte } from './components/respuesta-soporte/respuesta-soporte';
import { Respuestasoporteregistrar } from './components/respuesta-soporte/respuestasoporteregistrar/respuestasoporteregistrar';
import { Respuestasoportelistar } from './components/respuesta-soporte/respuestasoportelistar/respuestasoportelistar';
import { Cantidadrespuestatickets } from './components/cantidadrespuestatickets/cantidadrespuestatickets';
import { Contarticketporusuario } from './components/contarticketporusuario/contarticketporusuario';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
    path: 'inicio',
    component: Inicio,
    canActivate: [seguridadGuardGuard],
    },
    {
    path: 'registrar',
    component: Registrar,
    },
    {
    path: 'login',
    component: Autenticador,
    },
    {
        path: 'home',
        component: Home,
         canActivate: [seguridadGuardGuard],
    },
    {
        path: 'menu',
        component: Menu,
        canActivate: [seguridadGuardGuard],
    },
    {
        path: 'usuarios',  
        component: Users, 
        canActivate: [seguridadGuardGuard],
        children: [
            { path: 'registrar', component: Usuarioregistrar, },
            { path: 'actualizar/:id', component: Usuarioregistrar,},
            { path: 'totalarchivosXusuario', component: TotalArchivosXUsuario },
        ]
    },
    {
        path:'cuenta',
        component: Cuenta,canActivate: [seguridadGuardGuard],
        children: [
            { path: 'registrar', component: Cuentaregistrar },
            { path: 'actualizar/:id', component: Cuentaregistrar },
        ]
    },




    {
        path:'archivos',
        component: Archivos,
        canActivate: [seguridadGuardGuard],
        children: [
            { path: 'registrar', component: Archivoregistrar },
            { path: 'actualizar/:id', component: Archivoregistrar },
            {path: 'buscarxfecha', component: BuscarArchivosXFecha},
        ]
    },

    {
        path:'recomendaciones',
        component: Recomendacion,
        canActivate: [seguridadGuardGuard],
        children: [
            { path: 'registrar', component: Recomendacionregistrar },
            { path: 'actualizar/:id', component: Recomendacionregistrar },
        ]
    },

     {
        path: 'alertas',
        component: Alerta,
        canActivate: [seguridadGuardGuard],
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
        canActivate: [seguridadGuardGuard],
        children: [
            { path: 'listar', component: Recursolistar },
            { path: 'registrar', component: Recursoregistrar }, 
            { path: 'editar/:id', component: Recursoregistrar },
            { path: 'buscar', component: Recursobuscar },
            {path: 'reporte1',component: Recursoquery1,},
            {path: 'reporte2',component: Recursoquery2,},
           
        ],
    },

    {
        path: 'roles',
        component: Role,
        canActivate: [seguridadGuardGuard],
        children: [
            { path: 'listar', component: Rollistar },
            { path: 'registrar', component: Rolregistrar }, 
            { path: 'editar/:id', component: Rolregistrar },
            { path: 'buscar', component: Recursobuscar },
           
        ],
    },

    {
    path: 'auditorias',
    component: Auditoria,
    canActivate: [seguridadGuardGuard],
    children: [
      { path: 'listar', component: AuditoriaListar },
      { path: 'buscar', component: AuditoriaBuscarComponent },
      { path: 'registrar', component: AuditoriaRegistrarComponent }
    ],
  },

  {
    path: 'cuentas',
    component: Cuenta,
    canActivate: [seguridadGuardGuard],
    children: [
      { path: 'listar', component: Cuentalistar },
      {
        path: 'buscar', component: CuentaBuscarComponent,
      },
      { path: 'registrar', component: Cuentaregistrar },
    ],
  },

  {
    path: 'logacceso',
    component: LogAcceso,
    canActivate: [seguridadGuardGuard],
    children: [{ path: 'listar', component: LogAccesoListar },
      { path: 'registrar', component: LogAccesoRegistrar },
      { path: 'buscar', component: LogAccesoBuscarComponent }
    ],
  },

  {
        path: 'tickets',
        component: TicketReporte, 
        canActivate: [seguridadGuardGuard],
        children: [
            { path: 'registrar', component: Ticketreporteregistrar },
            { path: 'editar/:id', component: Ticketreporteregistrar },
            { path: '' , component: Ticketreportelistar},
        ],
    },
    {
        path:'respuestas',
        component:RespuestaSoporte,
        canActivate: [seguridadGuardGuard],
        children:[
            {path:'registrar',component:Respuestasoporteregistrar},
            {path:'editar/:id',component:Respuestasoporteregistrar},
            {path:'',component:Respuestasoportelistar},
            {path:'cantidadrespuestatickets', component:Cantidadrespuestatickets},
            {path:'contarticketporusuario',component:Contarticketporusuario}
        ],
    },
    
      {
        path: 'scan',
        component: APIcomponent,
    },

];
