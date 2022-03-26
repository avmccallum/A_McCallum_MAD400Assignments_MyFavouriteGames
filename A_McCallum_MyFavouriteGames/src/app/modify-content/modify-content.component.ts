import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
  @Output() updateContentEvent = new EventEmitter<Content>();
  failMessage?: string;
  newContent?: Content;
  buttonMssg = "Add Item";

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  addUpdateContent(id: string, title: string, description: string, creator: string, imgUrl?: string, type?: string, tags?: string) {
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
      this.failMessage = "Could not add/update item";
    }

    let verifiedNum = parseInt(id)

    if(this.newContent) {
      if(verifiedNum) {
        if(this.gameService.checkIndex(verifiedNum)) {
          this.buttonMssg = "Update Item"
          this.newContent.id = verifiedNum
          this.updateContentEvent.emit(this.newContent);
        } else {
          this.failMessage = "Could not update item"
        }
      } else {
        this.newContentEvent.emit(this.newContent);
      }
    }
  }
}
