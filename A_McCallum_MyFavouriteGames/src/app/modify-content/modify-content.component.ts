import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { GameService } from '../services/game.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ContentFormComponent} from "../content-form/content-form.component";

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
  newContent?: Content;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ContentFormComponent, {
      width: '60%'

    });

    dialogRef.afterClosed().subscribe(content => {
      this.newContent = content.content
      if(this.newContent) {
        this.addContent(this.newContent)
      }
    })
  }

  addContent(newContent: Content) {
    console.log(newContent)
    this.newContentEvent.emit(newContent)
  }

}
