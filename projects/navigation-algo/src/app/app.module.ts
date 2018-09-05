import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationGridModule } from './navigation-grid/navigation-grid.module';
import { ActionsModule } from './actions/actions.module';

@NgModule({
  imports: [
    BrowserModule, NavigationGridModule, ActionsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
