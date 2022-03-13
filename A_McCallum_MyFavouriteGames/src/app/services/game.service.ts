import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { CONTENT } from '../helper-files/contentDb';
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private messageService: MessageService) { }

  getItem(id: number): Observable<Content> {
    this.messageService.removeLast()
    this.messageService.add(`Content item at ID: ${id}`)
    return of(CONTENT[id])
  }

  checkIndex(id: number): boolean {
    if(CONTENT[id]) {
      return true
    }
    this.messageService.removeLast()
    this.messageService.add(`Content could not be loaded from ID: ${id}`)
    return false
  }

  getContentObs(): Observable<Content[]> {
    this.messageService.add(`Content array loaded!`)
    return of(CONTENT)
  }
}
