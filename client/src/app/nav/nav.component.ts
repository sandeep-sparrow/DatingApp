import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { User } from '../_modules/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  model: any = {}; //empty object
  //CurrentUser$!: Observable<User>;
  loggedIn: Boolean = false;

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  login(){
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    },error => {
      console.log(error);
    });
  }

  logout(){
    this.accountService.logout();
  }

}
