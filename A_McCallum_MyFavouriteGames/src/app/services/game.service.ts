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
    this.messageService.add(`Content item at ID: ${id}`)
    return of(CONTENT[id])
  }

  getContentObs(): Observable<Content[]> {
    this.messageService.add(`Content array loaded!`)
    return of(CONTENT)
  }
}
