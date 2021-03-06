import {Router, RouterModule, Routes} from '@angular/router';

import { BuscadorComponent } from './Components/buscador/buscador.component';
import { CompraComponent } from './Components/compra/compra.component';
import { CrearUsuarioComponent } from './Components/crear-usuario/crear-usuario.component';
import { DevolucionComponent } from './Components/devolucion/devolucion.component';
import { HomeComponent } from './Components/home/home.component';
import { IniciarSesionComponent } from './Components/iniciar-sesion/iniciar-sesion.component';
import { MermeladaComponent } from './Components/mermelada/mermelada.component';
import { MermeladasComponent } from './Components/mermeladas/mermeladas.component';
import { PerfilComponent } from './Components/perfil/perfil.component';

const APP_ROUTES: Routes = 
[
    { path: 'home', component: HomeComponent },
    { path: 'mermeladas', component: MermeladasComponent },
    { path: 'crearUsuario', component: CrearUsuarioComponent },
    { path: 'iniciarSesion', component: IniciarSesionComponent },
    { path: 'perfil/:id', component: PerfilComponent },
    { path: 'compra/:id', component: CompraComponent},
    { path: 'devolucion/:id', component: DevolucionComponent },
    { path: 'mermelada/:id', component:MermeladaComponent },
    { path: 'buscar/:nombre', component:BuscadorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'mermeladas' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});