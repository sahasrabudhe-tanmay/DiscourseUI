import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DiscourseDataService } from 'src/app/services/data/discourse-data.service';
import { EncryptionService } from 'src/app/services/util/encryption.service';
import { DiscourseRestService } from 'src/app/services/rest/discourse-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dc-register',
  templateUrl: './dc-register.component.html',
  styleUrls: ['./dc-register.component.css']
})
export class DcRegisterComponent implements OnInit {

  registerForm: FormGroup;
  passwordsMatch: boolean = null;
  isUsernameAvailable: boolean = null;

  constructor(
    private dataService: DiscourseDataService,
    private encryptionService: EncryptionService,
    private restService: DiscourseRestService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
      retypePassword: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      image: new FormControl()
    });
  }

  registerUser(imageId: string) {
    let password = this.registerForm.get('password').value;
    password = this.encryptionService.encrypt('123456$#@$^@1ERF', password);
    let newUser = new User(
      this.registerForm.get('name').value,
      this.registerForm.get('username').value,
      password,
      this.registerForm.get('email').value,
      imageId
    );

    this.restService.registerUser(newUser).subscribe(userResponse => {
      if (userResponse.responseStatus.status === 'SUCCESS') {
        this.dataService.user = userResponse.user;
        this.dataService.isLoggedIn = true;
        this.dataService.token = userResponse.token;
        this.router.navigate(['']);
      } else {
        throw new Error('Something went wrong while registering');
      }
    });

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

  checkUsernameAvailability() {
    const username = this.registerForm.get('username').value;

    this.restService.checkUsernameAvailability(username).subscribe(responseStatus => {
      if (responseStatus.status === 'SUCCESS') {
        this.isUsernameAvailable = true;
      } else {
        this.isUsernameAvailable = false;
      }
    });
  }

  fileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.registerForm.get('image').setValue(file);
    }
  }

  register() {
    const formData = new FormData();
    formData.append('image', this.registerForm.get('image').value);
    formData.append('title', this.registerForm.get('username').value + new Date().getTime().toString());

    this.restService.uploadImage(formData).subscribe(response => {
      console.log(response);
      this.registerUser(response);
    });
  }

}
