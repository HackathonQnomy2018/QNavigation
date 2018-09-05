import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  @Output() start = new EventEmitter();
  @Output() end = new EventEmitter();
  @Output() go = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


}
