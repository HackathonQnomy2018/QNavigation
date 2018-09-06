import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataService {
  configUrl = "http://localhost/QFlowHackaton/qgo_api/Main/GetData";
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
        function() {
          debugger;
          let d = data;
        }
    );

    console.log(this._numOfRows);
    this.grid = [];
    for (let i = 0; i < this._numOfRows; i++) {
      this.grid[i] = [];
      for (let j = 0; j < this._numOfCols; j++) {
        this.grid[i][j] = 1;
      }
    }
  }
}
