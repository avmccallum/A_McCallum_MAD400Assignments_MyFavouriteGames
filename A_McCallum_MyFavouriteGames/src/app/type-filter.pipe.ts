import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(content: Content[], type?: string): Content[] {
    return content.filter(el => el.type == type);
  }

}
