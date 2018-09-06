import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '(document:keydown)': 'handleKeyDown($event)',
    '(document:keyup)': 'handleKeyUp($event)'
  }
})
export class GridComponent implements OnInit, AfterViewInit {

  @ViewChild('image') image: ElementRef;
  img: HTMLImageElement;
  height: number;
  width: number;

  public ctrlPressed = false;
  public isShiftKeyPressed = false;
  constructor(public dataService: DataService) { }

  ngOnInit() {
  }


  ngAfterViewInit(): void {
    setTimeout(() => {
      this.img = this.image.nativeElement;
      this.height = this.img.clientHeight;
      this.width = this.img.clientWidth;

    }, 500);
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
