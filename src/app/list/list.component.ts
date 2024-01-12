import { Component, Input} from '@angular/core';
import { Observable } from 'rxjs';
import { FormConfig } from '../form/models/form-config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() public formFields$!: Observable<FormConfig[]>;
  @Input() public registeredValue$!: Observable<any[]>;

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  
}
