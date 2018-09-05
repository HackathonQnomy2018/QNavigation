import { Component } from '@angular/core';
import { GridNode } from './models/grid-node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'navigation-algo';
  start = new GridNode(1, 1, 0);
  end = new GridNode(1, 5, 0);
}
