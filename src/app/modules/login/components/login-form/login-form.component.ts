import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';

import { UserValidation } from '../../../../shared/dtos/user-validation.dto';
import { AuthResult } from '../../../../shared/dtos/auth-results.dto';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {


  loginForm = new FormGroup({

    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  onSubmit() {

    const loginData: UserValidation = this.loginForm.value;

    this.authService.authUser(loginData).subscribe(({ data }) => {
    
      const authResult: AuthResult = data['loginEmail'];
      
      if (authResult.success) {

        
        this.router.navigate(['/user/profile']);
      }

    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

}
