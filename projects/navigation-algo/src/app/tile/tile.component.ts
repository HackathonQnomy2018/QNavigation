import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';
import { TileState } from './tile-state';


@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() state: TileState = TileState.none;

  @HostBinding('class.tile-block') get classTileBlock() { return this.state === TileState.block; }
  @HostBinding('class.tile-start') get classTileStart() { return this.state === TileState.start; }
  @HostBinding('class.tile-end') get classTileEnd() { return this.state === TileState.end; }

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click') onclick() {
    switch (this.state) {
      case TileState.none:
        this.state = TileState.block;
        break;
      case TileState.block:
        this.state = TileState.start;
        break;
      case TileState.start:
        this.state = TileState.end;
        break;
      case TileState.end:
        this.state = TileState.none;
        break;
    }
  }

}
