import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {

  public arr: string[] = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff'];

  constructor() { }

  ngOnInit() {
  }

}
