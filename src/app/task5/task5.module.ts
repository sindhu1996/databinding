import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';

@NgModule({
  declarations: [MainComponent, Sub1Component, Sub2Component],
  imports: [
    CommonModule
  ],
  exports: [MainComponent, Sub1Component, Sub2Component]
})
export class Task5Module { }
