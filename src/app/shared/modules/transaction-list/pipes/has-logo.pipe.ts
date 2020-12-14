import { Pipe, PipeTransform } from "@angular/core";
import { StringUtils } from "src/app/shared/utils/string-utils";

@Pipe({ name: 'hasLogo' })
export class HasLogoPipe implements PipeTransform {

  private iconNames = this.getIconNames();

  constructor() {}

  transform(name: string, ...args: any[]): boolean {
    const dashName = StringUtils.replaceCharsInString(name, ' ', '-');
    return this.iconNames.includes(dashName.toLocaleLowerCase());
  }

  private getIconNames(): string[] {
    return [
      '7-eleven',
      'amazon-online-store',
      'backbase',
      'h&m-online-store',
      'jerry-hildreth',
      'lawrence-pearson',
      'southern-electric-company',
      'texaco',
      'the-tea-lounge',
      'whole-foods'
    ]
  }

}