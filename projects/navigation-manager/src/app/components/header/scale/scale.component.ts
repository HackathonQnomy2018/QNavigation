import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.css']
})
export class ScaleComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

}
