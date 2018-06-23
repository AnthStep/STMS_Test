import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { AuthenticatedComponent } from './authenticated.component';
import { UserService } from './services/user.service';

const routes: Routes = [
    {
        path: '',
        component: AuthenticatedComponent,
        resolve: [UserService]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthenticatedRouterModule{}