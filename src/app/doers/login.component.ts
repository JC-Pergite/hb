import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/category';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { ControlMessagesComponent } from './control-messages.component';


@Component({
  selector: 'app-login',
  template: `
  		<form [formGroup]="userForm" (ngSubmit)="saveUser()">
        <input formControlName="name" id="name" />
        <app-control-messages [control]="userForm.controls.name"></app-control-messages>

        <input formControlName="email" id="email" />
        <app-control-messages [control]="userForm.controls.email"></app-control-messages>

        <textarea formControlName="profile" id="profile"></textarea>
        <app-control-messages [control]="userForm.controls.profile"></app-control-messages>

        <button type="submit" [disabled]="!userForm.valid">Submit</button>
      </form>
  `
})
export class LoginComponent {

	userForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
        this.createForm();
   
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      'name': ['', Validators.required ],
      'email': ['', [ Validators.required, this.loginService.emailValidator ] ],
      'profile': ['', [ Validators.required, Validators.minLength(10) ] ]
    }) 
  };
  
  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
    }
  }


}  