import { Component } from '@angular/core';
import { User } from './User';
import { LoadingController } from '@ionic/angular';

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

  constructor(public loadingController: LoadingController) { }

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
  }

  navigateToMap() {
  }

}
