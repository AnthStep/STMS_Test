import { Component } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";
import { UserService } from "./services/user.service";
import { User } from "./models/user.model";

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
export class AuthenticatedComponent{
    private userInfo: User;

    constructor(private userService: UserService){
        this.userInfo = this.userService.userData;
    }

    public changeAvatarPosition(avatarPos){
        this.userService.updateUser({avatarPos});
    }

    public changeUsernamePosition(usernamePos){
        this.userService.updateUser({usernamePos});
    }

}