import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-actions-toolbar',
  templateUrl: './actions-toolbar.component.html',
  styleUrls: ['./actions-toolbar.component.scss'],
})
export class ActionsToolbarComponent {
  @Output() selectAll = new EventEmitter<null>();
  @Input() status: boolean = false;

  onSelectAll() {
    this.selectAll.emit();
  }
}
