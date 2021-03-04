import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 1,
  beef: 2,
  onion: 0.4,
  cucumber: 0.3,
  egg: 0.7
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  public ingredient = {
    salad: 0,
    bacon: 0,
    meat: 0,
    cheese: 0,
    beef: 0,
    onion: 0,
    cucumber: 0,
    egg: 0
  };
  public disabledButton: any;
  public price = 2;

  constructor() {
    this.addIngredient = this.addIngredient.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  public addIngredient<K extends keyof object>(type: K) {
    let priceAddition = INGREDIENT_PRICE[type];
    this.price += priceAddition;
    this.ingredient[type]++;
    this.disabledButton = {...this.ingredient};
    for(let type in this.disabledButton) {
      this.disabledButton[type] = this.disabledButton[type] <= 0;
    }
    console.log("ingredients in app components", this.ingredient);
    console.log("disabledButton in app components",this.disabledButton);
  }

  public removeIngredient<K extends keyof object>(type: K) {
    if(this.ingredient[type] <= 0){
      return;
    }
    let priceAddition = INGREDIENT_PRICE[type];
    this.price -= priceAddition;
    this.ingredient[type]--;
    this.disabledButton = {...this.ingredient};
    for(let type in this.disabledButton) {
      this.disabledButton[type] = this.disabledButton[type] < 0;
    }
    console.log("ingredients in app components", this.ingredient);
    console.log("disabledButton in app components", this.disabledButton);
  }
  title = 'banhmi-builder';
}

