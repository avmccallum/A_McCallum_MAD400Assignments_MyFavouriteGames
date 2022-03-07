import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {isEmpty} from "rxjs";

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
  failMessage?: string;
  newContent?: Content;

  constructor() { }

  ngOnInit(): void {
  }

  addContent(id: string, title: string, description: string, creator: string, imgUrl?: string, type?: string, tags?: string) {
    if(type == "") {
      type = undefined
    }

    let tagsArray = tags?.split(", ")
    if(tagsArray) {
      for (let i = 0; i < tagsArray.length; i++) {
        if (tagsArray[i] == "") {
          tagsArray.splice(i, 1)
        }
      }
    }

    this.newContent = {
      id: parseInt(id),
      title: title,
      description: description,
      creator: creator,
      imgURL: imgUrl,
      type: type,
      tags: tagsArray
    }

    if(id == "" || title == "" || description == "" || creator == "") {
      this.newContent = undefined
    }

    let promise = new Promise((success, fail) => {
      if (this.newContent) {
        success(`${this.newContent.title} was added successfully`)
        this.failMessage = undefined
        this.newContentEvent.emit(this.newContent);
      } else {
        fail("Could not add item")
      }
    })

    promise.then(success => console.log(success)).catch(fail => this.failMessage = fail)
  }
}
