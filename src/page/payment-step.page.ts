import { $, ElementFinder } from 'protractor';

export class PaymentStep {
  private paymentMethodMenu: ElementFinder;

  constructor () {
    this.paymentMethodMenu = $('a.bankwire');
  }

  public async selectPaymentMethod(): Promise<void> {
    await this.paymentMethodMenu.click();
  }
}
