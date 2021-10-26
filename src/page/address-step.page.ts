import { $, ElementFinder } from 'protractor';

export class AddressStep {
  private addressesMenu: ElementFinder;

  constructor () {
    this.addressesMenu = $('#center_column > form > p > button[name="processAddress"]');
  }

  public async selectAddress(): Promise<void> {
    await this.addressesMenu.click();
  }
}
