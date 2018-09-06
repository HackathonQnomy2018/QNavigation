import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

    print(){
      console.log(JSON.stringify(this.dataService.grid))
    }

}