import { Injectable } from '@angular/core';
import { StateService } from './state.service';
import { TileComponent } from '../tile/tile.component';
import { Astar } from '../models/astar';
import { GridNode } from '../models/grid-node';

@Injectable({ providedIn: 'root' })
export class EngineService {


  constructor(private state: StateService) { }

  createPath() {
    if (this.state.start !== undefined && this.state.end !== undefined) {
      const result = Astar.search(this.state.graph, this.state.start, this.state.end);
      if (result !== []) {
        const start = new Date();
        result.forEach((resTile, index) => {
          // setTimeout(() => {
          console.log('createPath');

          if (this.state.graph.grid[resTile.x][resTile.y].weight === 1) {
            this.state.graph.grid[resTile.x][resTile.y].weight = 2;
          }
          if (index === result.length - 1) {
            const end = new Date();
            const elapsed = (end.getTime() - start.getTime()) / 1000;
            this.state.totalTime = elapsed;
            this.state.steps = result.length;
            this.state.router = 'finish';
          }
          // }, (index + 1) * 1000);
        });
      }
    }
  }

  setEndTile(end: GridNode): any {
    const tile = this.state.graph.grid[end.x][end.y];
    tile.weight = 4;
    this.state.configMode = '';
    if (this.state.end !== undefined) {
      this.state.graph.grid[this.state.end.x][this.state.end.y].weight = 1;
    }
    return this.state.end = tile;

  }
  setStartTile(start: GridNode): any {
    const tile = this.state.graph.grid[start.x][start.y];
    tile.weight = 3;
    this.state.configMode = '';
    if (this.state.start !== undefined) {
      this.state.graph.grid[this.state.start.x][this.state.start.y].weight = 1;
    }
    return this.state.start = tile;
  }

  setTile(selectedTile: GridNode) {
    const tile = this.state.graph.grid[selectedTile.x][selectedTile.y];
    tile.weight === 0 ? tile.weight = 1 : tile.weight = 0;
  }
}
