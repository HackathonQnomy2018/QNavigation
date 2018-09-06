import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../services/data.service';
import {LocationMetadata} from '../../../services/LocationMetadata';

@Component({
    selector: 'app-map-config',
    templateUrl: './map-config.component.html',
    styleUrls: ['./map-config.component.css']
})
export class MapConfigComponent implements OnInit {


    constructor(public dataService: DataService) {
    }

    ngOnInit() {
    }

    paintLocation(e) {
        console.log(e);
        this.dataService.currTile = this.dataService.tileColors.location;
        this.dataService.currLocation = {id: e.value} as LocationMetadata;
    }

}
