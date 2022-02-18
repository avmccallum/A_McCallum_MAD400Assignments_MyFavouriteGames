import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() content?: Content;
  typeFlag = "type";
  tagFlag = "tag";
  cardFlag = "card";

  constructor() {
  }

  ngOnInit(): void {
  }

  logDetail() {
    console.log(`ID: ${this.content?.id}, TITLE: ${this.content?.title}`);
  }
}
