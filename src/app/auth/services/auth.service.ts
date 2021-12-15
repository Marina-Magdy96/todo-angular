import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/auth/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  createUser(user:IUser)
  {
    this.http.post<IUser>('https://todo-api-nestjs.herokuapp.com/auth/register',user).subscribe(data=>{console.log('yes',data);
    })
  }
  login(user:IUser)
  {
    this.http.post<IUser>('https://todo-api-nestjs.herokuapp.com/auth/login',user).subscribe(data=>{console.log('yes',data);
    })
  }
}
