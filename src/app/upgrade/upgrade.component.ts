import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {

  @Output() choix = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(diff: string): void {
    this.choix.emit(diff);
  }

}
