import { Component, OnInit, Input, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})

export class BurgerComponent implements OnInit {
  @Input() ingredients: any;
  public array: any;
  ngOnInit(): void {
    this.array = [];
    console.log(this.ingredients);
    setInterval(()=>{
      this.array = Object.keys(this.ingredients)
      .map(igKey => {
              return [...Array(this.ingredients[igKey])].map(() => {
                return  [...Array(igKey)];
            });
      })
      .reduce((arr, el) => {
          return arr.concat(el);
      },[]);
    },100);
  }
}
