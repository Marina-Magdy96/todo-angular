import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../models/auth/auth.model';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss','../auth.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  user:IUser;
  constructor(private authService:AuthService) { }
  
  
  ngOnInit(): void {  
    this.registerForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*[0-9])([a-zA-Z0-9_-]+)$'),
      Validators.pattern('^(?=.*[a-z])([a-zA-Z0-9_-]+)$'),Validators.pattern('^(?=.*[A-Z])([a-zA-Z0-9_-]+)$')    ]),
      
      })
  }
  onSubmit()
  {
    this.user={username : this.registerForm.value.username,password : this.registerForm.value.password};
    this.authService.createUser(this.user);
  }

}
