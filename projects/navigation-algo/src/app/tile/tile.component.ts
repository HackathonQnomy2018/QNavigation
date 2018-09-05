import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';

export enum TileState {
  none = 0,
  block = 1
}

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() state: TileState = TileState.none;

  @HostBinding('class.tile-block') get classTileBlock() { return this.state === TileState.block; }

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click') onclick() {
    switch (this.state) {
      case TileState.none:
        this.state = TileState.block;
        break;
      case TileState.block:
        this.state = TileState.none;
        break;
    }
  }

}
