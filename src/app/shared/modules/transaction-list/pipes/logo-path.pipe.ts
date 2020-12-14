import { Pipe, PipeTransform } from '@angular/core';
import { StringUtils } from 'src/app/shared/utils/string-utils';

@Pipe({ name: 'logoPathPipe' })
export class LogoPathPipe implements PipeTransform {

  constructor() { }

  transform(name: string, path = 'assets/icons/', suffix = '.png'): string {
    name = name.toLocaleLowerCase();
    const dashName = StringUtils.replaceCharsInString(name, ' ', '-');
    return path + dashName + suffix;
  }

}
