import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sub3',
  templateUrl: './sub3.component.html',
  styleUrls: ['./sub3.component.css']
})
export class Sub3Component implements OnInit {
  @Input() public parentData;

  constructor() { }

  ngOnInit() {
  }

}
