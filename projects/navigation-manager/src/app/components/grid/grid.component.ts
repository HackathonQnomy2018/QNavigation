import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '(document:keydown)': 'handleKeyDown($event)',
    '(document:keyup)': 'handleKeyUp($event)'
  }
})
export class GridComponent implements OnInit {

  public ctrlPressed = false;
  public isShiftKeyPressed = false;
  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  paintBoundries(i, j) {
    if (this.ctrlPressed) {
      this.dataService.grid[i][j] = 2;
    }
    if (this.isShiftKeyPressed) {
      this.dataService.grid[i][j] = 1;
    }
  }

  handleKeyDown(e) {
    if (e.ctrlKey) {
      this.ctrlPressed = true;
    }
    if (e.shiftKey) {
      this.isShiftKeyPressed = true;
    }
  }

  handleKeyUp(e) {
    if (!e.ctrlKey) {
      this.ctrlPressed = false;
    }
    if (!e.shiftKey) {
      this.isShiftKeyPressed = false;
    }
  }
}
