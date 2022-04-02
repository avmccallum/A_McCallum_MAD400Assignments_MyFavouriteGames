import {Component, EventEmitter, Inject, OnInit, Optional, Output} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {GameService} from "../services/game.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.scss']
})
export class ContentFormComponent implements OnInit {
  @Output() formAddEvent = new EventEmitter<Content>();
  @Output() formUpdateEvent = new EventEmitter<Content>();
  failMessage?: string;
  newContent?: Content;
  buttonMsg = "Add Item";
  // verifiedNum?: number;

  constructor(public dialogRef: MatDialogRef<ContentFormComponent>) {

  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close({content: this.newContent});
  }

  // verifyID(id: string) {
  //   if(id) {
  //     this.verifiedNum = parseInt(id)
  //     if(this.gameService.checkIndex(this.verifiedNum)) {
  //       this.buttonMsg = "Update Item"
  //     }
  //   }
  // }

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
      this.failMessage = "Could not add item";
    }

    if(this.newContent) {
      // if(this.verifiedNum) {
      //   this.newContent.id = this.verifiedNum
      //   this.updateContentEvent.emit(this.newContent);
      // } else {

      this.formAddEvent.emit(this.newContent);
      this.close();
      // }
    }
    // this.buttonMsg = "Add Item"
    // this.verifiedNum = undefined;

  }

}
