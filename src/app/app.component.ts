import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'form_SOLID';

  formFields: any[] = [
    { id: 1, name: 'nome', label: 'Nome:', type: 'text' },
    { id: 2, name: 'idade', label: 'Idade:', type: 'text' },
  ];
}
