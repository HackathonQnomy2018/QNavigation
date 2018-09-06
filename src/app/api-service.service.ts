import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FORMS_BODY } from './central-forms';
import { EMPTY } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiServiceService {


  constructor(private http: HttpClient) {


  }

  matrix2() {
    const obj = { Case: '1', Data: null };
    const body = FORMS_BODY();
    body.Template.OnlineFormTemplateItems[0].AnswerText = JSON.stringify(obj);
    return this.http.post('https://centraldemo.qnomy.com/Forms/form/5A39990E-901E-4B76-820D-BCAFB232342B', body)
      .pipe(tap(val => console.log(val)));

  }


  start(loctionParam) {
    if (!loctionParam) { return; }
    const obj = { Case: '2', Data: loctionParam.split('=')[1] };
    const body = FORMS_BODY();
    body.Template.OnlineFormTemplateItems[0].AnswerText = JSON.stringify(obj);
    return this.http.post('https://centraldemo.qnomy.com/Forms/form/5A39990E-901E-4B76-820D-BCAFB232342B', body)
      .pipe(tap(val => console.log(val)));

  }


  customer(personalId) {
    const obj = { Case: '3', Data: personalId };
    const body = FORMS_BODY();
    body.Template.OnlineFormTemplateItems[0].AnswerText = JSON.stringify(obj);
    return this.http.post('https://centraldemo.qnomy.com/Forms/form/5A39990E-901E-4B76-820D-BCAFB232342B', body)
      .pipe(tap(val => console.log(val)));

  }


  end(customerId) {
    const obj = { Case: '4', Data: customerId };
    const body = FORMS_BODY();
    body.Template.OnlineFormTemplateItems[0].AnswerText = JSON.stringify(obj);
    return this.http.post('https://centraldemo.qnomy.com/Forms/form/5A39990E-901E-4B76-820D-BCAFB232342B', body)
      .pipe(tap(val => console.log(val)));
  }
}
