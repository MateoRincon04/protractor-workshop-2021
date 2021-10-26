import { $, ElementFinder } from 'protractor';

export class BankPayment {
  private bankPaymentMenu: ElementFinder;

  constructor () {
    this.bankPaymentMenu = $('#cart_navigation > button');
  }

  public async confirmOrder(): Promise<void> {
    await this.bankPaymentMenu.click();
  }
}
