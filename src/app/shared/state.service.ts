import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class StateService{
    public tokenChanged: Subject<string> = new Subject();

    constructor(){

    }

    public removeAuthToken(): void{
        this.tokenChanged.next(null);
        localStorage.removeItem('authToken');
    }

    public setAuthToken(token: string): void{
        this.tokenChanged.next(token);
        localStorage.setItem('authToken', token);
    }

    public getAuthToken(): string{
        return localStorage.getItem('authToken');
    }
}