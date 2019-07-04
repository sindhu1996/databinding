import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { T3Component } from './t3/t3.component';
import { T4Component } from './t4/t4.component';

@NgModule({
  declarations: [T3Component, T4Component],
  imports: [
    CommonModule
  ],
  exports: [T3Component, T4Component]
})
export class Task3Module { }
