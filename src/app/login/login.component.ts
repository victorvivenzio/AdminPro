import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../models/user.model';
import { UserService } from '../services/services.index';

declare function init_custom();
declare const gapi: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public remember: boolean = false;
    public email: string;
    public oauth2: any;
    constructor(
        public router: Router,
        public userService: UserService,
        public ngZone: NgZone,
    ) {
        this.email = localStorage.getItem('email') || '';
        if (this.email.length > 0) {
            this.remember = true;
        }
    }

    ngOnInit() {
        this.googleInit();
        init_custom();
    }
    googleInit() {
        gapi.load('auth2', () => {
            this.oauth2 = gapi.auth2.init({
                client_id: '820598660360-oc9h2mmp2cfb1m8ubh3b5pcrkr7k51cv.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            });
            this.attachSignin(document.getElementById('googleSignin'));
        });
    }
    attachSignin( element ) {
        this.oauth2.attachClickHandler(element, {}, (googleUser) => {
            const token = googleUser.getAuthResponse().id_token;
            this.userService.loginGoogle(token)
                    .subscribe( resp => {if ( resp === true ) {
                        this.ngZone.run(() => {
                            return this.router.navigate(['/dashboard']);
                        }).then();
                    }
                });
        });
    }
    access(form: NgForm) {
        if (!form.valid) {
            return;
        }
        const user = new User(
            null,
            form.value.email,
            form.value.password,
        );

        console.log(form.value.remember);

        this.userService.login(user, form.value.remember)
            .subscribe( resp => {
                if ( resp === true ) {
                    this.router.navigate(['/dashboard']);
                }
            });
    }
}
