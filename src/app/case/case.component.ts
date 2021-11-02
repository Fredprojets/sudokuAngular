import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {

  @Input() c = '';
  @Input() s = '';

  constructor() { }

  ngOnInit(): void {
  }

  sol(): void {
    this.c = this.s;
  }
}
