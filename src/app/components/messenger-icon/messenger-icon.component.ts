import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'messenger-icon',
  templateUrl: './messenger-icon.component.html',
  styleUrls: ['./messenger-icon.component.scss'],
})
export class MessengerIconComponent implements OnInit {
  @Input() backgroundColor: string = '';

  constructor() { }

  ngOnInit() {}

}
