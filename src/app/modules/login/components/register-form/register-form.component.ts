import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegisterEmailUserDto } from 'src/app/shared/dtos/register-email-user.dto';
import { InsertionResult } from 'src/app/shared/dtos/insertion-result.dto';

import { AuthService } from '../../../../core/services/auth.service';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {


  registerForm = new FormGroup({

    email: new FormControl(''),
    password: new FormControl(''),
    emailCode: new FormControl(null)
  });

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  onSubmit() {

    const registerData: RegisterEmailUserDto = this.registerForm.value;

    this.authService.registerUser(registerData).subscribe(({ data }) => {

      const authResult: InsertionResult = data['newUser'];

    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }
}
