import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { GameService } from '../services/game.service';
import {MatDialog} from "@angular/material/dialog";

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
  buttonMsg = "Add Item";
  verifiedNum?: number;

  constructor(private gameService: GameService) { }

  openDialog() {
    // const dialogRef = this.dialog.open(ModifyContentComponent, {
    //
    // });
  }

  ngOnInit(): void {
  }

  verifyID(id: string) {
    if(id) {
      this.verifiedNum = parseInt(id)
      if(this.gameService.checkIndex(this.verifiedNum)) {
        this.buttonMsg = "Update Item"
      }
    }
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

    if(this.newContent) {
      if(this.verifiedNum) {
        this.newContent.id = this.verifiedNum
        this.updateContentEvent.emit(this.newContent);
      } else {
        this.newContentEvent.emit(this.newContent);
      }
    }
    this.buttonMsg = "Add Item"
    this.verifiedNum = undefined;
  }
}
