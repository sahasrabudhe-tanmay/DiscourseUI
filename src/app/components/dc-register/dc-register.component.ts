import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dc-register',
  templateUrl: './dc-register.component.html',
  styleUrls: ['./dc-register.component.css']
})
export class DcRegisterComponent implements OnInit {

  registerForm: FormGroup;
  passwordsMatch: boolean = null;

  constructor() { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
      retypePassword: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email])
    });
  }

  registerUser() {
    console.log(this.registerForm);
  }

  comparePasswords() {
    const password = this.registerForm.get('password').value;
    const retypePassword = this.registerForm.get('retypePassword').value;

    if (password !== null && retypePassword != null) {
      if (password !== retypePassword) {
        this.passwordsMatch = false;
      } else {
        this.passwordsMatch = true;
      }
    }
  }

}
