import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() selectedPageEvent: EventEmitter<string> =
    new EventEmitter<string>();

  onActive(pageSelected: string) {
    this.selectedPageEvent.emit(pageSelected);
  }
}
