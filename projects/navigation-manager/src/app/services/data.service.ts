import {Injectable} from '@angular/core';

@Injectable()
export class DataService {



  public grid: number[][]
  public numOfRows = 30;
  public numOfCols = 30;

  constructor(){
    this.initArray()
  }

  initArray() {
    console.log(this.numOfRows)
    this.grid = [];
    for(let i=0; i< this.numOfRows; i++){
      this.grid[i] = [];
      for(let j=0; j< this.numOfCols; j++){
        this.grid[i][j] = 1;
      }
    }
  }

}
