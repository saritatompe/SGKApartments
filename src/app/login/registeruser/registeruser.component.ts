import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-registeruser',
    templateUrl: './registeruser.component.html',
    styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private loginService: LoginService
    ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            role: ['', Validators.required],
            email: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
    get f() { return this.registerForm.controls; }

    registerUser() {
        debugger
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;

        const payload = {
            "username": this.registerForm.controls.username.value,
            "email": this.registerForm.controls.email.value,
            "password": this.registerForm.controls.password.value,
            "roles": [
                'ROLE_ADMIN'
            ]
        };
        this.loginService.doRegister(payload).subscribe((res) => {
            console.log(res);
        })
    }

}
