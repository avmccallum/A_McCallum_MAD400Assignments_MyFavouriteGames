import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../helper-files/content-interface';
import { GameService } from '../services/game.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  id?: number;
  content?: Content;
  // verifiedNumber: number = -1

  constructor(private route: ActivatedRoute, private gameService: GameService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if(!params.get('id')) {
        console.error("No ID received")
      }
      this.id = Number(params.get('id') ?? "0");
      this.gameService.getItem(this.id).subscribe((game) => {
        this.content = game;
        this.messageService.clear()
        if(this.content) {
          this.messageService.add(`Content at ID: ${this.content.id}, Title: ${this.content.title}`)
        }
      })
    })
  }

  // selectItem(id: string) {
  //   let validNum = parseInt(id)
  //   if(validNum >= 0) {
  //     this.verifiedNumber = validNum
  //     if(this.gameService.checkIndex(this.verifiedNumber)) {
  //       this.gameService.getItem(this.verifiedNumber).subscribe(content => this.content = content)
  //     }
  //   }
  // }

}
