import { Routes } from '@angular/router';
import { NotFoundComponent } from '@core/shell/not-found/not-found.component';
import { AppComponent } from './app.component';
import { authenticationGuard } from '@core/guards/authentication.guard';
import { tokenGuard } from '@core/guards/token.guard';

export const APP_ROUTES: Routes = [
    // canActivate : [authenticationGuard],
    // { path: '' , redirectTo: 'home', pathMatch: 'full'},
    { path: '' , component : AppComponent},
    { path: 'login', canActivate: [tokenGuard], loadComponent: () => import('./features/login/login.component').then(c => c.LoginComponent)},
    { path: 'home' , canActivate: [authenticationGuard] , loadChildren: () => import('./features/home/home.routes').then(c => c.HOME_ROUTES)},
    // { path: 'users' , loadChildren: () => import('./features/users/users.route').then(c => c.USERS_ROUTES)},
    { path: '**', loadComponent: () => import('./core/shell/not-found/not-found.component').then(c => c.NotFoundComponent)}
];
