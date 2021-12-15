import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from '../models/auth/auth.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','../auth.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user:IUser;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.loginForm= new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      
      })
  }
  onSubmit()
  {
    this.user={username : this.loginForm.value.username,password : this.loginForm.value.password};
    this.authService.login(this.user);
  }

}
