import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-base',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-base.component.html',
  styleUrl: './form-base.component.css'
})
export class FormBaseComponent implements OnInit{

  @Input() formFields: any[] = [];
  form!: FormGroup;

  ngOnInit(): void {
    
  }

  onSubmit(){

  }

}
