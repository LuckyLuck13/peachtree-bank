export class NumberUtils {

  static round2(value: number): number {
    return Math.round(value * 100) / 100;
  }

  static balanceOverdraft(amount: number, bankBalance: number, maxOverdraft: number): boolean {
    return amount > bankBalance + (0 - maxOverdraft);
  }
  
}
