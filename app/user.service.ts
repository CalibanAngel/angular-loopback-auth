import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class User {
    constructor(
        public email: string,
        public password: string) { }
}

var users = [
    new User('admin@admin.com','adm9'),
    new User('user1@gmail.com','a23')
];

@Injectable()
export class AuthenticationService {
    constructor(
        private _router: Router
    ) {}

    login(user) {
        var authenticatedUser = users.find(u => u.email === user.email);
        if (authenticatedUser && authenticatedUser.password === user.password) {
            this._router.navigate(['welcome']);
            return true;
        }
        return false;
    }

    logout(user) {
        this._router.navigate(['Login']);
    }

    checkLogin() {
        this._router.navigate(['Login']);
    }

}
