import {
  Component,
  Injectable,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { ColumnComponent } from './column.component';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent {
  @Input() dataset;
   columns: ColumnComponent[] = [];
   addColumn(column) {
     this.columns.push(column);
   }
}
