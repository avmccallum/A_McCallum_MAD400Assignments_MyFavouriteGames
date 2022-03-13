import { Component } from '@angular/core';
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

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.gameService.getItem(2).subscribe(content => this.content = content)
  }

}
