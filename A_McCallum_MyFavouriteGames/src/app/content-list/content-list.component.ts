import { Component, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contentList: Content[];

  constructor(private gameService: GameService) {
    this.contentList = [];
  }

  ngOnInit(): void {
    this.getContentFromServer();
  }

  getContentFromServer() {
    this.gameService.getContent().subscribe(contentArray => {
      this.contentList = contentArray;
    });
  }

  addContentToList(newContent: Content) {
    console.log("addcontenttolist registered")
    this.gameService.addContent(newContent).subscribe(
      newContentFromServer => {
        this.contentList.push(newContentFromServer);
        this.contentList = [...this.contentList]
      });
  }

  showResult(searchItem: string): string {
    let resultText = document.querySelector('.search-result');
    let searchResult = this.contentList.find(el => el.title.toUpperCase() === searchItem.toUpperCase());

    if(searchItem === "") {
      return "";
    }

    if(resultText) {
      if (searchResult) {
        resultText.classList.add('found');
        resultText.classList.remove('not-found');
        return searchItem + " was found!";
      } else {
        resultText.classList.add('not-found');
        resultText.classList.remove('found');
        return searchItem + " was not found!"
      }
    }

    return "";
  }
}
