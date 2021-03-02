import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgerComponent } from './components/burger/burger.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { ControlsComponent } from './components/controls/controls.component';
import { ControlComponent } from './components/controls/control/control.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    IngredientComponent,
    ControlsComponent,
    ControlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
