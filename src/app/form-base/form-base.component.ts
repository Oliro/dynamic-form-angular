import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'app-form-base',
  standalone: true,
  imports: [ReactiveFormsModule, FormInputComponent],
  templateUrl: './form-base.component.html',
  styleUrl: './form-base.component.css'
})
export class FormBaseComponent implements OnInit {

  @Input() formFields: any[] = [];
  form!: FormGroup;
  private formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.createFormControl();
  }

  createFormControl() {

    this.form = this.formBuilder.group({});

    this.formFields.forEach((input) => {
      this.form.addControl(input.name, this.formBuilder.control(''));
    });

  }

  onSubmit() {
console.log(this.form.value);
  }

}
