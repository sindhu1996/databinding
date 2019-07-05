import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-ch1',
  templateUrl: './ch1.component.html',
  styleUrls: ['./ch1.component.css']
})
export class Ch1Component implements OnInit {
user:string;
editUser:string;
  constructor(private userservice:UserService) { }

  ngOnInit() {

    this.userservice.cast.subscribe(user=>this.user=user);
  }
editTheUser()
{
  this.userservice.editUser(this.editUser)
}
}
