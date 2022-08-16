import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {userName:'', password:''}

  constructor() { }

  ngOnInit(): void {
  }

  login(data:any){
    
  }
}
