import { Component, OnInit } from '@angular/core';
export interface IUser
{
  'username':string;
  'password':string;
}
@Component({
  selector: 'app-auth',
  templateUrl: './auth.model.html',
  styleUrls: ['./auth.model.scss']
})
export class AuthModel implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
