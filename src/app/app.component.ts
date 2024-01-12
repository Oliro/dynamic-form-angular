import { Component, OnInit, inject } from '@angular/core';
import { FormService } from './form/services/form.service';
import { Observable, of } from 'rxjs';

import { FormConfig } from './form/models/form-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'form_SOLID';

  public formFields$!: Observable<FormConfig[]>;

  public registeredValue$!: Observable<any[]>;

  public registeredValue: any[] = []

  private formService = inject(FormService);

  ngOnInit() {
    this.formFields$ = this.formService.getAll();
  }

  getRegisteredValue(event: any[]) {

    this.registeredValue.push(event);

    //A função 'of' do RxJS cria um Observable
    this.registeredValue$ = of(this.registeredValue);

  }

}
