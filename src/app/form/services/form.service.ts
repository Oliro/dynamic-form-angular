import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormConfig } from '../models/form-config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

constructor(private http: HttpClient) { }

getAll():Observable<FormConfig[]> {
  return this.http.get<FormConfig[]>('assets/data/registerForm.json');
}

}
