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


  constructor() {
  }

  ngOnInit(): void {
  }


}
