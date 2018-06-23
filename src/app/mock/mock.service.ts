import { Injectable } from "@angular/core";
import { MockBackend, MockConnection } from "@angular/http/testing";
import { Response, ResponseOptions } from "@angular/http";

@Injectable()
export class MockService{
    constructor(
        private mock: MockBackend
    ){

    }

    public initMock(): void{
        this.mock.connections.subscribe(connection => {
            this._authenticate(connection);
        })
    }

    private _authenticate(connection: MockConnection){
        if(connection.request.url === 'authenticate'){
            const body = JSON.parse(connection.request.getBody());
            const token = body.token;
            const username = body.username;

            if(token){
                const authToken: any = btoa(token);
                if(!localStorage.getItem(authToken)){
                    localStorage.setItem(authToken, JSON.stringify({username}))
                }                
                connection.mockRespond(new Response(new ResponseOptions({
                    body: {authToken}
                })));
            }else{
                connection.mockError(new Error('No token provided'));
            }
        }
        if(connection.request.url === 'getUser'){
            const token = JSON.parse(connection.request.getBody()).userToken;
            const user = JSON.parse(localStorage.getItem(token));
            connection.mockRespond(new Response(new ResponseOptions({
                body: user
            })))
        }
        if(connection.request.url == 'putUser'){
            const user = JSON.parse(connection.request.getBody()).user;
            const token = JSON.parse(connection.request.getBody()).userToken;
            localStorage.setItem(token, JSON.stringify(user));
            connection.mockRespond(new Response(new ResponseOptions()));
        }
    }


}