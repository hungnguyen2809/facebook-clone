import { Component, OnInit, Input } from '@angular/core';
import { Story } from './../../interfaces';

@Component({
  selector: 'component-story',
  templateUrl: './component-story.component.html',
  styleUrls: ['./component-story.component.scss'],
})
export class ComponentStoryComponent implements OnInit {
  // public img: string = "https://i.imgur.com/Vi1ihEw.jpg";
  // public avartar: string = 'https://i.imgur.com/OHF3jkZ.png';

  @Input() story: Story;

  constructor() { }

  ngOnInit() {}

}
