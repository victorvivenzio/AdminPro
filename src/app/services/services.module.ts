import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    LoginGuard,
    SettingsService,
    SharedService,
    SidebarService,
    UserService,
} from './services.index';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule, HttpClientModule,
    ],
    providers: [
        SettingsService,
        SidebarService,
        SharedService,
        UserService,
        LoginGuard
    ]
})
export class ServicesModule {
}
