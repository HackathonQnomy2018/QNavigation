import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationGridComponent } from './navigation-grid.component';
import { TileModule } from '../tile/tile.module';

@NgModule({
  imports: [
    CommonModule, TileModule
  ],
  declarations: [NavigationGridComponent],
  exports: [NavigationGridComponent]
})
export class NavigationGridModule { }
