import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormConfig } from '../models/form-config';


@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css'
})
export class FormInputComponent {

  @Input() formField!: FormConfig;
  @Input() form!: FormGroup;

  
}
