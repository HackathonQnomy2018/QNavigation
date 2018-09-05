import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { Graph } from '../models/graph';

@Component({
  selector: 'app-navigation-grid',
  templateUrl: './navigation-grid.component.html',
  styleUrls: ['./navigation-grid.component.scss']
})
export class NavigationGridComponent implements OnInit {


  gameBoard: Graph;

  constructor(private state: StateService) { }

  ngOnInit() {
    this.gameBoard = this.state.graph;
  }

}
