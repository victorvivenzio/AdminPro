import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    setting: ThemeSetting = {
        themeUrl: 'assets/css/colors/default.css',
        theme: 'default',
    };

    constructor( @Inject(DOCUMENT) private dom ) {
        this.loadSettings();
    }

    saveSettings() {
        localStorage.setItem('themeSettings', JSON.stringify(this.setting));
    }
    loadSettings() {
        if (localStorage.getItem('themeSettings')) {
            this.setting = JSON.parse(localStorage.getItem('themeSettings'));
            this.selectTheme(this.setting);
        }
    }
    selectTheme( setting: ThemeSetting ) {
        this.dom.getElementById('theme').setAttribute('href', setting.themeUrl);

        this.setting.theme = setting.theme;
        this.setting.themeUrl = setting.themeUrl;
        this.saveSettings();
    }

}

interface ThemeSetting {
    themeUrl: string;
    theme: string;
}

