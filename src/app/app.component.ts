import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public ingredient = {
    salad : 0,
    bacon: 0,
    meat: 0,
    cheese: 0
  }
  title = 'banhmi-builder';
}
