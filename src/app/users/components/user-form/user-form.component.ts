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
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
  });

  ngOnInit(): void {}

  convertToJSON() {
    const data = {
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
