import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormBuilder } from '@angular/forms';

import { IUser } from '../../interfaces/User';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Output() newUser = new EventEmitter<IUser>();

  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder) {}

  profileForm = this.fb.group({
    firstname: ['', [Validators.required, Validators.minLength(2)]],
    lastname: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(60)],
    ],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
  });

  ngOnInit(): void {}

  convertToJSON() {
    const data = {
      id: Math.floor(Math.random() * 10 + 10),
      firstname: this.profileForm.value.firstname || '{}',
      lastname: this.profileForm.value.lastname || '{}',
      email: this.profileForm.value.email || '{}',
      phone: this.profileForm.value.phone || '{}',
    };
    return data;
  }

  onSubmit() {
    this.newUser.emit(this.convertToJSON());
  }
}
