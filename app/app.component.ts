import { Component } from '@angular/core';
import { LoginFormComponent } from './login-form.component';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  directives: [LoginFormComponent, ROUTER_DIRECTIVES],
  template: `
            <router-outlet></router-outlet>
        `
})
@RouteConfig([
  { path: '/login', name: 'Login', component: LoginFormComponent }
])
export class AppComponent {}

//  { path: '/home', name: 'Home', component: PrivateComponent, useAsDefault:true },
