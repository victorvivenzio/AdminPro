import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/services.index';

import { User } from '../models/user.model';
import { Router } from '@angular/router';
import swal from 'sweetalert';

declare function init_custom();

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    form: FormGroup;

    constructor(
        public userService: UserService,
        public router: Router
    ) {
    }

    ngOnInit() {
        init_custom();
        this.form = new FormGroup({
            name: new FormControl(
                null, [
                    Validators.required
                ]
            ),
            email: new FormControl(
                null, [
                    Validators.required,
                    Validators.email
                ]),
            password: new FormControl(
                null, [
                    Validators.required
                ]
            ),
            confirm_password: new FormControl(
                null, [
                    Validators.required
                ]
            ),
            conditions: new FormControl(
                null, [
                    Validators.required
                ]
            ),
        },  {
            validators: this.equals( 'password', 'confirm_password')
        });
        this.form.setValue({
            name: 'Jola',
            email: 'test@test.com',
            password: '123456',
            confirm_password: '123456',
            conditions: null,
        });
    }

    equals(field1: string, field2: string) {
        return (group: FormGroup) => {
          const pass1 = group.controls[field1].value;
          const pass2 = group.controls[field2].value;
          if (pass1 === pass2) {
              return null;
          }
          return {
              notEquals: true,
          };
        };
    }

    regUser() {
        if (!this.form.value.conditions) {
            swal('Advertencia!', 'Debe aceptar las condiciones!', 'warning');
            return false;
        }
        if (this.form.invalid) {
            return false;
        }
        const user = new User(
            this.form.value.name,
            this.form.value.email,
            this.form.value.password,
        );
        //
        this.userService.createUser(user)
            .subscribe( resp => {
                    console.log(resp);
                    this.router.navigate(['login']);
                }
            );
    }

}
