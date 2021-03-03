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
    cheese: 0,
    beef: 0,
    onion: 0,
    cucumber: 0,
    egg: 0
  }

  constructor() {
    this.addIngredient = this.addIngredient.bind(this);
  }

  public ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  public addIngredient<K extends keyof object>(type: K) {
    this.ingredient[type]++;
    console.log("this.ingredient in app components", this.ingredient);

  }
  title = 'banhmi-builder';
}

