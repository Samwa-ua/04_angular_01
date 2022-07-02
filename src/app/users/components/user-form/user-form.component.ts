import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { IUsers } from '../../interfaces/Users';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Output() newUser = new EventEmitter<any>();

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
      firstName: this.profileForm.value.firstname,
      lastName: this.profileForm.value.lastname,
      email: this.profileForm.value.email,
      phone: this.profileForm.value.phone,
    };
    return data;
  }

  onSubmit() {
    this.newUser.emit(this.convertToJSON());
  }
}
