import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'more-icon',
  templateUrl: './more-icon.component.html',
  styleUrls: ['./more-icon.component.scss'],
})
export class MoreIconComponent implements OnInit {
  @Input() backgroundColor: string = '';

  constructor() { }

  ngOnInit() {}

}
