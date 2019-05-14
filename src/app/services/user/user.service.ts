import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    user: User;
    token: string;

    constructor(
        public http: HttpClient,
        public router: Router,
    ) {
        this.loadStorage();
        // console.log('User Service ');
    }
    isLogged() {
        return this.token.length > 10;
    }
    loadStorage() {
        if (localStorage.getItem('token')) {
            this.token = localStorage.getItem('token');
            this.user = JSON.parse(localStorage.getItem('user'));
        } else {
            this.token = '';
            this.user = null;
        }
    }
    login(user: User, remember: boolean = false) {
        console.log(remember);
        if ( remember ) {
            localStorage.setItem('email', user.email);
        } else {
            localStorage.removeItem('email');
        }
        const url = `${URL_SERVICES}login/`;
        return this.http.post(url, user).pipe(
            map( (resp: any) => {
                this.saveUserStorage(resp);
                return true;
            })
        );
    }
    logout() {
        this.user = null;
        this.token = null;
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.router.navigate(['/login']).then();
    }
    createUser(user: User) {
        const url = `${URL_SERVICES}users`;
        return this.http.post( url, user ).pipe(
            map( (resp: any) => {
                swal('Usuario creado correctamente', user.email, 'success');
                return resp.user;
            })
        );
    }
    loginGoogle( token: string ) {
        const url = `${URL_SERVICES}login/google`;
        return this.http.post(url, { token } ).pipe(
            map( (resp: any) => {
                this.saveUserStorage(resp);
                return true;
            })
        );
    }
    saveUserStorage(resp) {
        localStorage.setItem('id', resp.id);
        localStorage.setItem('token', resp.token);
        localStorage.setItem('user', JSON.stringify(resp.user));
        this.user = resp.user;
        this.token = resp.token;
    }
}
