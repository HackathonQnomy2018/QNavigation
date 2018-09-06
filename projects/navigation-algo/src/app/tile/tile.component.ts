import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';
import { TileState } from './tile-state';
import { GridNode } from '../models/grid-node';
import { EngineService } from '../services/engine.service';
import { StateService } from '../services/state.service';


@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() tile: GridNode;
  @Input() state: TileState = TileState.none;

  @HostBinding('class.tile-block') get classTileBlock() { return this.tile.weight === 0; }
  @HostBinding('class.tile-start') get classTileStart() { return this.tile.weight === 3; }
  @HostBinding('class.tile-end') get classTileEnd() { return this.tile.weight === 4; }
  @HostBinding('class.tile-step') get classTileStep() { return this.tile.weight === 2; }

  constructor(private engine: EngineService, private stateService: StateService) { }

  ngOnInit() {
  }

  @HostListener('click') onclick() {
    this.engine.setTile(this.tile);
  }

}
