import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgerComponent } from './components/burger/burger.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { ControlsComponent } from './components/controls/controls.component';
import { ControlComponent } from './components/controls/control/control.component';
import { ModalComponent } from './UI/modal/modal.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    IngredientComponent,
    ControlsComponent,
    ControlComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
