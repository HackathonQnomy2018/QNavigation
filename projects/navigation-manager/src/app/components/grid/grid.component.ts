import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {ElementRef} from '@angular/core';
import {LocationMetadata} from '../../services/LocationMetadata';

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

    constructor(public dataService: DataService) {
    }

    ngOnInit() {
    }

    markTile(row: number, col: number) {

        if (this.dataService.currTile === this.dataService.tileColors.location) {
            this.dataService.grid[row][col] = this.dataService.currTile.id;
        }


        this.dataService.currLocation[this.dataService.currLocation.id] = {
            x: row,
            y: col,
            id: this.dataService.currLocation.id,
            name: this.dataService.locations[this.dataService.currLocation.id].viewValue
        } as LocationMetadata;
        console.log(this.dataService.locations);
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.img = this.image.nativeElement;
            this.height = this.img.clientHeight;
            this.width = this.img.clientWidth;

        }, 500);
    }

    paintBoundries(i, j) {
        if (this.ctrlPressed || this.isShiftKeyPressed) {
            this.dataService.grid[i][j] = this.dataService.currTile.id;
        }

    }

    handleKeyDown(e) {
        if (e.ctrlKey) {
            this.ctrlPressed = true;
            this.dataService.currTile = this.dataService.tileColors.obstacle;
            return;
        }
        if (e.shiftKey) {
            this.isShiftKeyPressed = true;
            this.dataService.currTile = this.dataService.tileColors.free;
            return;
        }
        this.dataService.currTile = this.dataService.tileColors.free;
    }

    handleKeyUp(e) {
        if (!e.ctrlKey || !e.shiftKey) {
            this.ctrlPressed = false;
            this.isShiftKeyPressed = false;
            this.dataService.currTile = this.dataService.tileColors.free;
        }

    }
}
