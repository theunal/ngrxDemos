import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loginStart } from 'src/app/state/auth/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  login() {
    document.getElementById('loginForm').classList.add('ng-submitted')

    if (this.loginForm.valid)
      this.store.dispatch(loginStart(this.loginForm.value))
  }

  formValidationError(value: string) {
    let formValue = this.loginForm.get(value)

    if ((formValue.touched && !formValue.valid) || document.getElementById('loginForm').classList.contains('ng-submitted')) {
      return formValue.errors?.['required'] ?
        `${value} is required` :
        formValue.errors?.['minlength'] ?
          `${value} should be minimum ${formValue.errors?.['minlength'].requiredLength} characters` :
          formValue.errors?.['email'] ?
            `Invalid email` : ''
    }
    return ''
  }

}
