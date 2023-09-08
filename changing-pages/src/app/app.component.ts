import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageName: string = 'home';
  title = 'changing-pages';

  activePage(activePageName: string) {
    this.pageName = activePageName;
  }
}
