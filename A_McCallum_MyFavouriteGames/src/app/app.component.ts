import {Component, Input} from '@angular/core';
import { Content } from './helper-files/content-interface';
import { GameService } from './services/game.service';
import {LogUpdateService} from "./services/log-update.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'A_McCallum_MyFavouriteGames';


  constructor(private logService: LogUpdateService) {
  }

  ngOnInit(): void {
    this.logService.init();
  }


}
