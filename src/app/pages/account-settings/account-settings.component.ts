import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/services.index';

@Component({
    selector: 'app-account-settings',
    templateUrl: './account-settings.component.html',
    styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

    constructor(@Inject(DOCUMENT) private dom, public themeSettings: SettingsService ) {
    }

    ngOnInit() {
        this.checkSelected(this.themeSettings.setting);
    }

    changeColor(color: string, element: any) {
        this.changeSelector(element);
        const url: string = `assets/css/colors/${color}.css`;
        const theme: any = {
            theme: color,
            themeUrl: url
        };
        this.themeSettings.selectTheme(theme);
    }

    changeSelector(element: any) {
        const selectors: any = this.dom.getElementsByClassName('selector');
        for (const selector of selectors) {
            selector.classList.remove('working');
        }
        element.target.classList.add('working');
    }

    checkSelected(theme) {
        const selectors: any = this.dom.getElementsByClassName('selector');
        for (const selector of selectors) {
            if (selector.getAttribute('data-color') === theme.theme) {
                selector.classList.add('working');
                break;
            }
        }
    }
}
