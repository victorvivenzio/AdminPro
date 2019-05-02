import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { RegisterComponent } from './login/register.component';
import { Graphics1Component } from './pages/graphics1/graphics1.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: PageNotFoundComponent },
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
