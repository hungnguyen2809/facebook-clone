import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.scss'],
})
export class UserIconComponent implements OnInit {
  @Input() backgroundColor: string = '';

  constructor() { }

  ngOnInit() {}

}
