import { Routes } from '@angular/router';
import { NotFoundComponent } from '@core/components/not-found/not-found.component';
import { authenticationGuard } from '@core/guards/authentication.guard';
import { AppComponent } from './app.component';
import { ROUTES } from '@core/constants/routes';

export const routes: Routes = [
    // canActivate : [authenticationGuard],
    { path: 'home' , loadComponent: () => import('./features/home/home.component').then(c => c.HomeComponent)},
    { path: '**', component: NotFoundComponent}
];
