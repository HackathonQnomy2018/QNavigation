import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationGridModule } from './navigation-grid/navigation-grid.module';

@NgModule({
  imports: [
    BrowserModule, NavigationGridModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
