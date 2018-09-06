import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocationMetadata, Location} from './LocationMetadata';


@Injectable()
export class DataService {
    configUrl = 'http://ivana10-pc/QFlowHackaton/qgo_api/Main/GetData';
    viewGrid = false;
    public tileColors = {
        free: {id: 1, color: ''},
        obstacle: {id: 2, color: 'red'},
        location: {id: 3, color: 'yellow'}
    };

    locationDict = {};


    locations: Location[] = [
        {value: '0', viewValue: 'OperationRoom1', metadata: {}},
        {value: '1', viewValue: 'OperationRoom2', metadata: {}},
        {value: '2', viewValue: 'OperationRoom3', metadata: {}}
    ];

    public currTile = this.tileColors.free;
    public currLocation: LocationMetadata;


    constructor(private http: HttpClient) {
        this.initArray();
    }

    get numOfCols(): number {
        return this._numOfCols;
    }

    set numOfCols(value: number) {
        this._numOfCols = value;
        this.initArray();
    }

    get numOfRows(): number {
        return this._numOfRows;
    }

    set numOfRows(value: number) {
        this._numOfRows = value;
        this.initArray();
    }

    public grid: number[][];
    private _numOfRows = 30;
    private _numOfCols = 30;

    initArray() {
        this.http.get(this.configUrl).subscribe(
            data =>
                function () {
                    debugger;
                    let d = data;
                }
        );

        this.grid = [];
        for (let i = 0; i < this._numOfRows; i++) {
            this.grid[i] = [];
            for (let j = 0; j < this._numOfCols; j++) {
                this.grid[i][j] = 1;
            }
        }
    }
}
