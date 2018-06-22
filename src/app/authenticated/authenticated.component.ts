import { Component, OnInit } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
    selector: 'stms-authenticated',
    templateUrl: 'authenticated.html',
    styleUrls: ['authenticated.scss'],
    animations: [
        trigger('welcomeAnimation', [
            transition(':enter', [
                style({opacity: 0}),
                animate('500ms',style({opacity: 1}))
            ]),
            transition(':leave', [
                style({opacity: 1}),
                animate('500ms',style({opacity: 0}))
            ]),
        ])
    ]
})
export class AuthenticatedComponent implements OnInit{
    public showWelcome: boolean;

    constructor(){}

    public ngOnInit(){
        this.showWelcome = true;
        setTimeout(()=>{
            this.showWelcome = false;
        }, 3000);
    }
}