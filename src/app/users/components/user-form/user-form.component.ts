import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AsyncValidator,
  FormArray,
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { IEmailValidation } from '../../interfaces/EmailValidation';
import { IUsers } from '../../interfaces/Users';

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
  @Output() newUser = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  matcher = new MyErrorStateMatcher();

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: [
      '',
      [Validators.required, Validators.email],
      this.restrictedEmail.bind(this) as unknown as AsyncValidator,
    ],
    phone: ['', Validators.required],
  });

  ngOnInit(): void {}

  restrictedEmail(control: FormControl): Promise<IEmailValidation> {
    const promise = new Promise<IEmailValidation>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.test') {
          resolve({ restrictedEmail: true });
        } else {
          resolve(null!);
        }
      }, 2000);
    });
    return promise;
  }

  convertToJSON() {
    const data = {
      firstName: this.profileForm.value.firstName,
      lastName: this.profileForm.value.lastName,
      email: this.profileForm.value.email,
      phone: this.profileForm.value.phone,
    };
    return data;
  }

  onSubmit() {
    this.newUser.emit(this.convertToJSON());
  }
}
