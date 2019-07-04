import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sub1',
  templateUrl: './sub1.component.html',
  styleUrls: ['./sub1.component.css']
})
export class Sub1Component implements OnInit {
  @Output() public middleEvent= new EventEmitter();
 
  constructor() { }

  ngOnInit() {
  }
  getMessage(value){
    this.middleEvent.emit(value);}
}
