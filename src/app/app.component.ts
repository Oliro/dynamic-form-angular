import { Component } from '@angular/core';
import { FormType } from './form/models/form-type';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'form_SOLID';

  formFields: FormType[] = [
    { id: 1, element: 'input', name: 'nome', label: 'Nome:', value:'', required:true, validator:'', type: 'text', class:'', optionsElement:[] },
    { id: 2, element: 'input', name: 'idade', label: 'Idade:', value:'', required:true, validator:'', type: 'text', class:'', optionsElement:[]},
    { id: 3, element: 'select', name: 'status', label: 'Idade:', value:'', required:true, validator:'', type: '', class:'', optionsElement: [{value: '1', name: 'Ativo'}, {value: '2', name: 'Pausado'}, {value: '2', name: 'Inativo'}]},
  ];
}
