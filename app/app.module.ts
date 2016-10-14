import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';

import { AppComponent }         from './app.component';
import { LoginFormComponent } from "./login-form.component";
import { HomeComponent } from "./home.component";
import { UserService } from "./user.service"

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            },
            { path: 'login', component: LoginFormComponent },
            { path: 'home', component: HomeComponent }
        ])
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginFormComponent
    ],
    providers: [
        UserService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule{

}