import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MockService } from './mock/mock.service';
import { MockBackend } from '@angular/http/testing';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(private http: HttpClient, private mock: MockBackend){
    this.mock.connections.subscribe(connection => {
      console.log(connection);
    })
  }
}
