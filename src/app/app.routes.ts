import { Routes } from '@angular/router';
import { NotFoundComponent } from '@core/components/not-found/not-found.component';

export const routes: Routes = [
    // canActivate : [authenticationGuard],
    // { path: '' , redirectTo: 'home', pathMatch: 'full'},
    { path: '' , loadComponent: () => import('./app.component').then(c => c.AppComponent)},
    { path: 'home' , loadComponent: () => import('./features/home/home.component').then(c => c.HomeComponent)},
    { path: '**', component: NotFoundComponent}
];
