import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.component.html',
  styleUrls: ['./sub2.component.css']
})
export class Sub2Component implements OnInit {
  @Output() public childEvent= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  displayMe(value){
    this.childEvent.emit(value);
    }
}
