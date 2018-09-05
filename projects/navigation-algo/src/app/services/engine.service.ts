import { Injectable } from '@angular/core';
import { StateService } from './state.service';
import { TileComponent } from '../tile/tile.component';

@Injectable({ providedIn: 'root' })
export class EngineService {

  constructor(private state: StateService) { }

  createPath() { }
  setTile(tile: TileComponent) { }
}
