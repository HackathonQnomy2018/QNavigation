import { Component, OnInit, Input, HostBinding, ElementRef, Renderer, Renderer2 } from '@angular/core';
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
  height: number;
  width: number;
  gameBoard: Graph;

  @Input() set image(image: HTMLImageElement) {
    setTimeout(() => {
      this.height = image.clientHeight;
      this.width = image.clientWidth;

      this.setStyles();
    }, 500);

  }

  @Input() set start(start: GridNode) { this._start = start; }
  @Input() set end(end: GridNode) { this._end = end; }
  @Input() set matrix(matrix: number[][]) {
    // matrix[28][17] = 1;
    this.gameBoard = this.state.createGraph(matrix);
    this.engine.setStartTile(this._start);
    this.engine.setEndTile(this._end);
  }


  constructor(private state: StateService, private engine: EngineService, private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  setStyles() {
    this.renderer.setStyle(this.elRef.nativeElement, 'width', this.width + 'px');
    this.renderer.setStyle(this.elRef.nativeElement, 'height', this.height + 'px');
  }

  go() { this.engine.createPath(); }

}
