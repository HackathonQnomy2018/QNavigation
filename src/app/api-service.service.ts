import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FORMS_BODY } from './central-forms';
import { EMPTY } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiServiceService {

  headers: Headers;

  constructor(private http: HttpClient) {

    this.headers = new Headers()
    this.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    this.headers.append('Access-Control-Allow-Credentials', 'true');
    this.headers.append('Content-Type', 'application/json;charset=utf-8');

  }

  matrix() {
    const obj = { Case: '1', Data: null };
    const body = FORMS_BODY();
    body.Template.OnlineFormTemplateItems[0].AnswerText = obj;
    return this.http.post('https://centraldemo.qnomy.com/Forms/form/5A39990E-901E-4B76-820D-BCAFB232342B', body, { headers: this.headers })
      .pipe(tap(val => console.log(val)));

  }


  start(loctionParam) {
    const obj = { Case: '2', Data: loctionParam.split('=')[1] };
    const body = FORMS_BODY();
    body.Template.OnlineFormTemplateItems[0].AnswerText = obj;
    return this.http.post('https://centraldemo.qnomy.com/Forms/form/5A39990E-901E-4B76-820D-BCAFB232342B', body, { headers: this.headers })
      .pipe(tap(val => console.log(val)));

  }


  customer(personalId) {
    const obj = { Case: '3', Data: personalId };
    const body = FORMS_BODY();
    body.Template.OnlineFormTemplateItems[0].AnswerText = obj;
    return this.http.post('https://centraldemo.qnomy.com/Forms/form/5A39990E-901E-4B76-820D-BCAFB232342B', body, { headers: this.headers })
      .pipe(tap(val => console.log(val)));

  }


  end(customerId) {
    const obj = { Case: '4', Data: customerId };
    const body = FORMS_BODY();
    body.Template.OnlineFormTemplateItems[0].AnswerText = obj;
    return this.http.post('https://centraldemo.qnomy.com/Forms/form/5A39990E-901E-4B76-820D-BCAFB232342B', body, { headers: this.headers })
      .pipe(tap(val => console.log(val)));
  }
}
