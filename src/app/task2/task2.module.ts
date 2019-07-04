import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { T2Component } from './t2/t2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [T2Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [T2Component]
})
export class Task2Module { }
