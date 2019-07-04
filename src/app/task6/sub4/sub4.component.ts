import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sub4',
  templateUrl: './sub4.component.html',
  styleUrls: ['./sub4.component.css']
})
export class Sub4Component implements OnInit {
  @Output() public myEvent= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  PrintMe(value){
    this.myEvent.emit(value);
  }
}
