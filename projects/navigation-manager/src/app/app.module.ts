import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DataService} from './services/data.service';
import {TileComponent} from './components/tile/tile.component';
import {GridComponent} from './components/grid/grid.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormField, MatFormFieldModule, MatOptionModule, MatSelectModule, MatSliderModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { MapConfigComponent } from './components/header/map-config/map-config.component';
import { ScaleComponent } from './components/header/scale/scale.component';


const routes: Routes = [
    {path: 'config', component: MapConfigComponent},
    {path: 'scale', component: ScaleComponent},
    {path: '**', component: HeaderComponent}
]

@NgModule({
    declarations: [
        AppComponent,
        TileComponent,
        GridComponent,
        HeaderComponent,
        FooterComponent,
        MapConfigComponent,
        ScaleComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MatSliderModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
