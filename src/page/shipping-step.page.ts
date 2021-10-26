import { $, ElementFinder } from 'protractor';

export class ShippingStep {
  private shippingMenu: ElementFinder;
  private acceptConditions: ElementFinder;

  constructor () {
    this.shippingMenu = $('#cgv');
    this.acceptConditions = $('#form > p > button');
  }

  public async selectShipping(): Promise<void> {
    await this.shippingMenu.click();
  }

  public async agreeToTerms(): Promise<void> {
    await this.acceptConditions.click();
  }
}
