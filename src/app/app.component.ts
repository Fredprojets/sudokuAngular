import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SudokuAngular';
  public diff = '';
  refresh(s: string): void {
    this.diff = s;
  }
}
