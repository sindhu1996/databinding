import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Main1Component } from './main1/main1.component';
import { Sub3Component } from './sub3/sub3.component';
import { Sub4Component } from './sub4/sub4.component';

@NgModule({
  declarations: [Main1Component, Sub3Component, Sub4Component],
  imports: [
    CommonModule
  ],
  exports: [Main1Component, Sub3Component, Sub4Component], 
})
export class Task6Module { }
