import {Injectable} from '@angular/core';

@Injectable()
export class DataService {
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



  public grid: number[][]
  private _numOfRows = 30;
  private _numOfCols = 30;

  constructor(){
    this.initArray();
  }

  initArray() {
    console.log(this._numOfRows)
    this.grid = [];
    for(let i=0; i< this._numOfRows; i++){
      this.grid[i] = [];
      for(let j=0; j< this._numOfCols; j++){
        this.grid[i][j] = 1;
      }
    }
  }

}
