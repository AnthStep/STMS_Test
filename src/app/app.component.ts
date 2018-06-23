import { Component } from '@angular/core';
import { MockService } from './mock/mock.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(private mockService: MockService){
    this.mockService.initMock();
  }
}
