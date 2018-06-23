import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/user.model";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { StateService } from "../../shared/state.service";
import { RequestOptions, Headers } from "@angular/http";

@Injectable()
export class UserService implements Resolve<Observable<any>>{
    public userData: User;

    constructor(
        private http: HttpClient,
        private state: StateService
    ){}

    public resolve(){
        return this.http.post('getUser',{
            userToken: this.state.getAuthToken()
        }).pipe(map((res: Response) => {
            const body: any = res.json()
            this.userData = {...body};
            return res;
        }))
    }

    public updateUser(userUpdates){
        this.userData = {
            ...this.userData,
            ...userUpdates
        }
        const body = {
            userToken: this.state.getAuthToken(),
            user: this.userData
        }
        this.http.put('putUser', body);
    }
}