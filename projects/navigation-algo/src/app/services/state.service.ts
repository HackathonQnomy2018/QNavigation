import { Injectable } from '@angular/core';
import { AlgoAStarService } from './algo-astar.service';

@Injectable({  providedIn: 'root'})
export class StateService {

  constructor(private algoAStar: AlgoAStarService) { }
}
