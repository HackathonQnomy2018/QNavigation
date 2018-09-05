import { Pipe, PipeTransform } from '@angular/core';
import { TileState } from './tile-state';

@Pipe({
  name: 'tileText'
})
export class TileTextPipe implements PipeTransform {

  transform(value: TileState): any {

    if (value === TileState.start) {
      return 'start';
    }

    if (value === TileState.end) {
      return 'end';
    }

    return '';
  }

}
