import {Component, Input} from '@angular/core';
import { Content } from './helper-files/content-interface';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'A_McCallum_MyFavouriteGames';
  content?: Content;
  verifiedNumber: number = -1

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
  }

  selectItem(id: string) {
    let validNum = parseInt(id)
    if(validNum >= 0) {
      this.verifiedNumber = validNum
      if(this.gameService.checkIndex(this.verifiedNumber)) {
        this.gameService.getItem(this.verifiedNumber).subscribe(content => this.content = content)
      }
    }
  }
}
