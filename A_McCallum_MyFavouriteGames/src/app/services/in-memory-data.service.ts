import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Content } from '../helper-files/content-interface';
import { CONTENT } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const content: Content[] = CONTENT;
    return {content};
  }

  getId(content: Content[]): number {
    return content.length > 0 ? Math.max(...content.map(c => c.id? c.id : 0)) + 1 : 2000;
  }

}
