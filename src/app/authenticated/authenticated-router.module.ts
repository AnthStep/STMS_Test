import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { AuthenticatedComponent } from './authenticated.component';

const routes: Routes = [
    {
        path: '',
        component: AuthenticatedComponent
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