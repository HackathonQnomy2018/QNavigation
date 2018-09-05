import { Injectable } from '@angular/core';
import { AlgoAStarService } from './algo-astar.service';
import { Graph } from '../models/graph';
import { GridNode } from '../models/grid-node';

@Injectable({ providedIn: 'root' })
export class StateService {
  configMode = '';


  graph: Graph;

  router = 'game';

  colors = {
    clear: 'lightBlue',
    barrier: 'cyan',
    path: 'red',
    startEnd: 'yellow'
  };
  start: GridNode;
  end: GridNode;
  totalTime: number;
  steps: number;

  constructor(private algoAStar: AlgoAStarService) { }

  createGraph = (matrix: number[][]) => this.graph = new Graph(matrix);

}
