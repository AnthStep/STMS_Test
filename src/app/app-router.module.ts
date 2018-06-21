import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes : Routes = [
    {
        path: 'auth',
        loadChildren: './authenticated/authenticated.module#AuthenticatedModule'
    },
    {
        path: 'public',
        loadChildren: './public/public.module#PublicModule'
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/public'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule{}