import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-t6',
  templateUrl: './t6.component.html',
  styleUrls: ['./t6.component.css']
})
export class T6Component implements OnInit {
  @Output() public childEvent = new EventEmitter();
 
  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit('Hey sindhu');
  }
}
