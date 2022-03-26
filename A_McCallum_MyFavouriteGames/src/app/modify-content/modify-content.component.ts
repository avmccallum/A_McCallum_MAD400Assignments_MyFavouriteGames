import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {
  @Output() newContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
  failMessage?: string;
  newContent?: Content;

  constructor() { }

  ngOnInit(): void {
  }

  addContent(title: string, description: string, creator: string, imgUrl?: string, type?: string, tags?: string) {
    this.failMessage = undefined;
    if (type == "") {
      type = undefined
    }

    let tagsArray = tags?.split(", ")
    if (tagsArray) {
      for (let i = 0; i < tagsArray.length; i++) {
        if (tagsArray[i] == "") {
          tagsArray.splice(i, 1)
        }
      }
    }

    this.newContent = {
      title: title,
      description: description,
      creator: creator,
      imgURL: imgUrl,
      type: type?.toUpperCase(),
      tags: tagsArray
    }

    if(title == "" || description == "" || creator == "") {
      this.newContent = undefined
      this.failMessage = "Could not add content";
    }

    if(this.newContent) {
      this.newContentEvent.emit(this.newContent);
      console.log("emitting content " + this.newContent.title)
    }
  }

}
