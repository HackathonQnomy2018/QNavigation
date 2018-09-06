import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutPage } from './about.page';
import { NavigationGridModule } from '../../../projects/navigation-algo/src/app/navigation-grid/navigation-grid.module';
import { ActionsModule } from '../../../projects/navigation-algo/src/app/actions/actions.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NavigationGridModule, ActionsModule,
    RouterModule.forChild([{ path: '', component: AboutPage }])
  ],
  declarations: [AboutPage]
})
export class AboutPageModule { }
