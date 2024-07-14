import { Routes } from '@angular/router';
import { NotFoundComponent } from '@core/components/not-found/not-found.component';

export const routes: Routes = [
    // canActivate : [authenticationGuard],
    { path: '' , redirectTo: 'home', pathMatch: 'full'},
    { path: 'home' , loadComponent: () => import('./features/home/home.component').then(c => c.HomeComponent)},
    { path: '**', component: NotFoundComponent}
];
