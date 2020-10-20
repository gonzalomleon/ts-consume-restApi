import {Component, TemplateRef, ContentChild, Input} from '@angular/core';
import {DatatableComponent} from './datatable.component';
import { TableTemplate } from './table-template';

@Component({
  selector: 'column',
  template: ``,
 
})
export class ColumnComponent {
  @Input() value: string;
  @Input() header: string;
    
  @ContentChild('tableHeaderTemplate') headerTemplate: TemplateRef<any>;
  @ContentChild('tableBodyTemplate') bodyTemplate: TemplateRef<any>;

  constructor(public table: DatatableComponent) {
      table.addColumn(this);
	}

}