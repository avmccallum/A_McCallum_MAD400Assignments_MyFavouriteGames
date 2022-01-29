import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  myList: ContentList;
  itemInfo: string;

  constructor() { 
    this.myList = new ContentList();
    this.myList.addItem({
      id: 1,
      title: "The Legend of Zelda: Breath of the Wild",
      description: "Forget everything you know about The Legend of Zelda games. Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across vast fields, through forests, and to mountain peaks as you discover what has become of the kingdom of Hyrule in this stunning Open-Air Adventure.",
      creator: "Nintendo",
      imgURL: "https://assets.nintendo.com/image/upload/c_pad,f_auto,h_613,q_auto,w_1089/ncom/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/hero?v=2022012808"
    });
    this.myList.addItem({
      id: 2,
      title: "Assassin's Creed Origins",
      description: "Ancient Egypt, a land of majesty and intrigue, is disappearing in a ruthless fight for power. Unveil dark secrets and forgotten myths as you go back to the one founding moment: The Origins of the Assassin's Brotherhood.",
      creator: "Ubisoft",
      tags: ["Open World", "Assassin", "Action", "RPG", "Stealth"]
    });
    this.myList.addItem({
      id: 3,
      title: "Fallout 4",
      description: "As the sole survivor of Vault 111, you enter a world destroyed by nuclear war. Every second is a fight for survival, and every choice is yours. Only you can rebuild and determine the fate of the Wasteland. Welcome home.",
      creator: "Bethesda",
      type: "PC"
    });
    this.itemInfo = this.myList.getItemDetail(0);
  }

  ngOnInit(): void {
  }

}
