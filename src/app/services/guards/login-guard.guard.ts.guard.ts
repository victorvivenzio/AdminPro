import { Injectable, NgZone } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(
        public userService: UserService,
        public router: Router,
        public ngZone: NgZone
    ) {
    }

    canActivate() {
        if (!this.userService.isLogged()) {
            this.router.navigate(['/login']);
        }
        return this.userService.isLogged();
    }
}
