import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from './login-form.component'

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {

    constructor (
        private _service:LoginFormComponent
    ) {}

    ngOnInit(){
        this._service.checkLogin();
    }

    logout() {
        this._service.logout();
    }
}
