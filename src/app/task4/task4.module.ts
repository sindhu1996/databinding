import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { T5Component } from './t5/t5.component';
import { T6Component } from './t6/t6.component';

@NgModule({
  declarations: [T5Component, T6Component],
  imports: [
    CommonModule
  ],
  exports: [T5Component, T6Component]
})
export class Task4Module { }
