import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'logoPathPipe' })
export class LogoPathPipe implements PipeTransform {

  private replaceSpacesRegexp = new RegExp(' ', 'g');

  constructor() { }

  transform(name: string, path = 'assets/icons/', suffix = '.png'): string {
    name = name.toLocaleLowerCase();
    const dashName = name.replace(this.replaceSpacesRegexp, '-');
    return path + dashName + suffix;
  }

}
