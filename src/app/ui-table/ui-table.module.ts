import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TableDirective } from './table/table.directive';
import { AgePipe } from './table/age.pipe';



@NgModule({
  declarations: [TableComponent, TableDirective, AgePipe],
  imports: [
    CommonModule
  ],
  exports:[
    TableComponent
  ]
})
export class UiTableModule { }
