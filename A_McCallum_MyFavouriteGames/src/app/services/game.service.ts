import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { CONTENT } from '../helper-files/contentDb';
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json'})
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getContent(): Observable<Content[]> {
    this.messageService.add(`Content array loaded!`)
    return this.http.get<Content[]>("api/content");
  }

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

  addContent(newContent: Content): Observable<Content> {
    console.log("adding new item " + newContent)
    return this.http.post<Content>("api/content", newContent, this.httpOptions)
  }
}
