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

  @HostBinding('class.tile-block') get classTileBlock() { return this.state === TileState.block; }
  @HostBinding('class.tile-start') get classTileStart() { return this.state === TileState.start; }
  @HostBinding('class.tile-end') get classTileEnd() { return this.state === TileState.end; }
  @HostBinding('class.tile-step') get classTileStep() { return this.tile.weight === 1; }

  constructor(private engine: EngineService, private stateService: StateService) { }

  ngOnInit() {
  }

  @HostListener('click') onclick() {
    switch (this.state) {
      case TileState.none:
        this.state = TileState.block;
        break;
      case TileState.block:
        this.stateService.configMode = 'start';
        this.state = TileState.start;
        break;
      case TileState.start:
        this.stateService.configMode = 'end';
        this.state = TileState.end;
        break;
      case TileState.end:
        this.state = TileState.none;
        return;
    }
    this.engine.setTile(this.tile);
  }

}
