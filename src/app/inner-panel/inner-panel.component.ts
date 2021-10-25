import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-panel',
  templateUrl: './inner-panel.component.html',
  styleUrls: ['./inner-panel.component.css']
})
export class InnerPanelComponent implements OnInit {

  @Input() case= '';

  constructor() { }

  ngOnInit(): void {
  }

}
