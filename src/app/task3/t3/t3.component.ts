import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t3',
  templateUrl: './t3.component.html',
  styleUrls: ['./t3.component.css']
})
export class T3Component implements OnInit {

  public childMessage = '';
  public message = '';
  send(message){
    this.childMessage = message;
}


  constructor() { }

  ngOnInit() {
  }

}
