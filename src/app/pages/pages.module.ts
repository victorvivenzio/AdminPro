import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';
import { DoughnutGraphicComponent } from '../components/doughnut-graphic/doughnut-graphic.component';
import { IncrementerComponent } from '../components/incrementer/incrementer.component';

// Routes
import { PAGES_ROUTES } from './pages.routes';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
        PagesComponent,
        IncrementerComponent,
        DoughnutGraphicComponent,
        AccountSettingsComponent,
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
        PagesComponent,
    ],
    imports: [
        SharedModule,
        FormsModule,
        BrowserModule,
        PAGES_ROUTES,
        ChartsModule,
    ]
})
export class PagesModule { }
