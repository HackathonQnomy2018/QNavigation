import { Component } from '@angular/core';
import { User } from './User';
import { LoadingController } from '@ionic/angular';
import { ApiServiceService } from '../api-service.service';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  user = new User;
  selectedView = 1;
  views = {
    Login: 1,
    AppointmentDetails: 2,
  };

  constructor(public loadingController: LoadingController, private api: ApiServiceService, ) { }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: '...אנא המתן',
      duration: 1000
    });
    return await loading.present();
  }

  onSubmit() {
    // this.presentLoading();
    this.selectedView = this.views.AppointmentDetails;

    this.api.customer(this.user.Id)
      .pipe(
        map((val: any) => val.Data.Messages[0].Message),
        tap(val => console.log('customer', val)),
        tap(val => localStorage.setItem('customer', val)))
      .subscribe();


  }

  navigateToMap() {

  }

}
