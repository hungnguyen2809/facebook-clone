import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'search-icon',
  templateUrl: './search-icon.component.html',
  styleUrls: ['./search-icon.component.scss'],
})
export class SearchIconComponent implements OnInit {
  @Input() backgroundColor: string = '';

  constructor() { }

  ngOnInit() {}

}
