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
          setTimeout(() => {
            this.state.graph.grid[resTile.x][resTile.y].weight = 2;
            if (index === result.length - 1) {
              const end = new Date();
              const elapsed = (end.getTime() - start.getTime()) / 1000;
              this.state.totalTime = elapsed;
              this.state.steps = result.length;
              this.state.router = 'finish';
            }
          }, (index + 1) * 100);
        });
      }
    }
  }

  setTile(selectedTile: GridNode) {

    const tile = this.state.graph.grid[selectedTile.x][selectedTile.y];
    switch (this.state.configMode) {
      case 'start': {
        tile.weight = 3;
        this.state.configMode = '';
        if (this.state.start !== undefined) {
          this.state.graph.grid[this.state.start.x][this.state.start.y].weight = 1;
        }
        this.state.start = tile;
        break;
      }
      case 'end': {
        tile.weight = 4;
        this.state.configMode = '';
        if (this.state.end !== undefined) {
          this.state.graph.grid[this.state.end.x][this.state.end.y].weight = 1;
        }
        this.state.end = tile;
        break;
      }
      default: {
        if (tile.weight === 1) {
          tile.weight === 0 ? tile.weight = 1 : tile.weight = 0;
        }
        break;
      }
    }
  }
}
