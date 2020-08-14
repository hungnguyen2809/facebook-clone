import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'number-like-comment-share',
  templateUrl: './like-comment-share.component.html',
  styleUrls: ['./like-comment-share.component.scss'],
})
export class LikeCommentShareComponent implements OnInit {
  @Input() like: number = 0;
  @Input() comment: number = 0;
  @Input() share: number = 0;

  constructor() { }

  ngOnInit() {}

}
