import { Pipe, PipeTransform } from '@angular/core';
import { TileState } from './tile-state';
import { GridNode } from '../models/grid-node';

@Pipe({
  name: 'tileText'
})
export class TileTextPipe implements PipeTransform {

  transform(value: TileState, tile: GridNode): any {

    if (value === TileState.start || tile && tile.weight === 3) {
      return 'start';
    }

    if (value === TileState.end || tile && tile.weight === 4) {
      return 'end';
    }

    return '';
  }

}
