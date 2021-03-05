import { Component, DoCheck } from '@angular/core';


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
  public ingredients = {
    salad: 0,
    bacon: 0,
    meat: 0,
    cheese: 0,
    beef: 0,
    onion: 0,
    cucumber: 0,
    egg: 0
  };
  public disabledButton;
  public price;
  public array;
  public addCondition;
  constructor() {
    this.addIngredient = this.addIngredient.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
    this.price = 2;
    this.addCondition =  this.price <= 2;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    //active change to disable button
    this.disabledButton = {...this.ingredients};
    for(let type in this.disabledButton) {
      this.disabledButton[type] = this.disabledButton[type] < 1;
    }

    //active change to burger view
    this.array = Object.keys(this.ingredients)
    .map(igKey => {
            return [...Array(this.ingredients[igKey])].map(() => {
              return  [...Array(igKey)];
          });
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    },[]);
  }

  public addIngredient<K extends keyof object>(type: K) {
    let priceAddition = INGREDIENT_PRICE[type];
    this.price += priceAddition;
    this.ingredients[type]++;
    this.disabledButton = {...this.ingredients};
    this.addCondition = this.price <= 2
    // console.log("ingredients in app components", this.ingredients);
    // console.log("disabledButton in app components",this.disabledButton);
  }

  public removeIngredient<K extends keyof object>(type: K) {
    if(this.ingredients[type] <= 0){
      return;
    }
    let priceAddition = INGREDIENT_PRICE[type];
    this.price -= priceAddition;
    this.ingredients[type]--;
    this.disabledButton = {...this.ingredients};
    this.addCondition = this.price <= 2

    // console.log("ingredients in app components", this.ingredients);
    // console.log("disabledButton in app components", this.disabledButton);
  }
  title = 'banhmi-builder';
}

