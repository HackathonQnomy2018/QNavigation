import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '../services/state.service';
import { Graph } from '../models/graph';
import { EngineService } from '../services/engine.service';
import { GridNode } from '../models/grid-node';

@Component({
  selector: 'app-navigation-grid',
  templateUrl: './navigation-grid.component.html',
  styleUrls: ['./navigation-grid.component.scss']
})
export class NavigationGridComponent implements OnInit {
  _start: GridNode;
  _end: GridNode;

  @Input() set start(start: GridNode) { this._start = start; }
  @Input() set end(end: GridNode) { this._end = end; }
  @Input() set matrix(matrix: number[][]) {
    this.gameBoard = this.state.createGraph(matrix);
    this.engine.setStartTile(this._start);
    this.engine.setEndTile(this._end);
  }

  gameBoard: Graph;

  constructor(private state: StateService, private engine: EngineService) { }

  ngOnInit() {
  }

  go() { this.engine.createPath(); }

}
