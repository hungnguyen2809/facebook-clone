import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'button-like',
  templateUrl: './button-like.component.html',
  styleUrls: ['./button-like.component.scss'],
})
export class ButtonLikeComponent implements OnInit {
  @Input() likeStatus: boolean;

  constructor() { }

  ngOnInit() {}

}
