import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-actions-toolbar',
  templateUrl: './actions-toolbar.component.html',
  styleUrls: ['./actions-toolbar.component.scss'],
})
export class ActionsToolbarComponent {
  @Input() status: boolean = false;
  @Output() selectAll = new EventEmitter<null>();
  @Output() remove = new EventEmitter();
  @Output() search = new EventEmitter<string>();
  @Output() sort = new EventEmitter<boolean>();
  searchName: string = '';

  onSelectAll() {
    this.selectAll.emit();
  }
  onDelete() {
    this.remove.emit();
  }
  onSearch() {
    this.search.emit(this.searchName);
  }
  onSort(ascending: boolean) {
    this.sort.emit(ascending);
  }
}
