import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./guard/auth.guard";
import { PublicGuard } from "./guard/public.guard";

const routes : Routes = [
    {
        path: 'auth',
        loadChildren: './authenticated/authenticated.module#AuthenticatedModule',
        canLoad: [AuthGuard],
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: './public/public.module#PublicModule',
        canLoad: [PublicGuard],
        canActivate: [PublicGuard]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
    },
    {
        path: '**',
        redirectTo: '/login'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule{}