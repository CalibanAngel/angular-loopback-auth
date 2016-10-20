import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service'

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login-form.component.html',
})
export class LoginFormComponent {
    constructor(
        private userService: UserService
    ) {}

    logout() {
        this.userService.logout()
    }

    checkLogin() {
        this.userService.checkLogin()
    }
}
