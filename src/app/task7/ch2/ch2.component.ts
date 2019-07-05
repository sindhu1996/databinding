import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-ch2',
  templateUrl: './ch2.component.html',
  styleUrls: ['./ch2.component.css']
})
export class Ch2Component implements OnInit {
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
  