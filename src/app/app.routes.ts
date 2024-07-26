import { Routes } from '@angular/router';
import { NotFoundComponent } from '@core/shell/not-found/not-found.component';
import { AppComponent } from './app.component';

export const APP_ROUTES: Routes = [
    // canActivate : [authenticationGuard],
    // { path: '' , redirectTo: 'home', pathMatch: 'full'},
    { path: '' , component : AppComponent},
    { path: 'home' , loadChildren: () => import('./features/home/home.routes').then(c => c.HOME_ROUTES)},
    { path: '**', loadComponent: () => import('./core/shell/not-found/not-found.component').then(c => c.NotFoundComponent)}
];
