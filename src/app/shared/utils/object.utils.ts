export class ObjectUtils {

  static isString(v: any): v is string {
    return v && typeof v === 'string';
  }

  static isArray(v: any): v is any[] {
    return v && Array.isArray(v);
  }
}