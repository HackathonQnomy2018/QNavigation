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

  @Input() set start(start: GridNode) { this.engine.setStartTile(start); }
  @Input() set end(end: GridNode) { this.engine.setEndTile(end); }
  gameBoard: Graph;

  constructor(private state: StateService, private engine: EngineService) { }

  ngOnInit() {
    this.gameBoard = this.state.graph;
  }

  go() { this.engine.createPath(); }

}
