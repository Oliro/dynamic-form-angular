import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { FormInputComponent } from '../form-input/form-input.component';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormConfig } from '../models/form-config';

@Component({
  selector: 'app-form-base',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormInputComponent],
  templateUrl: './form-base.component.html',
  styleUrl: './form-base.component.css'
})
export class FormBaseComponent implements OnInit {

  @Input() public formFields$!: Observable<FormConfig[]>;

  form!: FormGroup;
  private formBuilder = inject(FormBuilder);

  public showResult:boolean = false;

  ngOnInit(): void {
    this.createFormControl();
  }

  createFormControl() {

    this.form = this.formBuilder.group({});

    this.formFields$.subscribe((result) => {

      result.forEach((input) => {
        this.form.addControl(input.name, this.formBuilder.control(''));
      })

    })

  }

  onSubmit() {
    this.showResult = true;
    console.log(this.form.value);
  }

}
