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
        if (authenticatedUser && authenticatedUser.password === user.password) { //check user
            //must add the user to DB
            this._router.navigate(['Home']);
            return true;
        }
        return false;
    }

    logout() {
        //must remove the user from DB
        this._router.navigate(['Login']);
    }

    checkLogin() {
        //must check if user is login
        this._router.navigate(['Login']);
    }

}
