import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from './tile.component';
import { TileTextPipe } from './tile-text.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TileComponent, TileTextPipe],
  exports: [TileComponent]
})
export class TileModule { }
