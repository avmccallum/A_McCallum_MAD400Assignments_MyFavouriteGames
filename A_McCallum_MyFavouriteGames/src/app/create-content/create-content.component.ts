import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newContent?: Content;

  constructor() { }

  ngOnInit(): void {

    // this.promise.then(successResult => console.log(successResult)).catch(failResult => console.log(failResult))
  }

  addContent(id: string, title: string, description: string, creator: string, imgUrl?: string, type?: string, tags?: string) {

    this.newContent = {
      id: parseInt(id),
      title: title,
      description: description,
      creator: creator,
      imgURL: imgUrl,
      type: type,
      tags: tags?.split(",")
    }
    this.newContentEvent.emit(this.newContent);

    let promise = new Promise(function (success, fail) {
      let passed = true;
      if (passed) {
        success(`Content added: TITLE`);
      } else {
        fail('Could not add content');
      }
    });
  }



}
