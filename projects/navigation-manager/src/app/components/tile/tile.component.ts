import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  // public tileStyle: any;
  public tileStyle: any;
  @Input() col;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.tileStyle = {
      'height': 'calc(72vh / ' + this.dataService.numOfRows + ')',
      'width' : 'calc(calc(100vw / ' + this.dataService.numOfCols + ') - 0px)',
      'background': this.col == 2 ? '#ff000961' : ''

    }
    // this.tileStyle = {
    //   "width":
    // }

  }

}
