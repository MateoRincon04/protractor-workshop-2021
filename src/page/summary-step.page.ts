import { $, ElementFinder } from 'protractor';

export class SummaryStep {
  private shoopingCartSummaryMenu: ElementFinder;

  constructor () {
    this.shoopingCartSummaryMenu = $('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium');
  }

  public async proceedToSignIn(): Promise<void> {
    await this.shoopingCartSummaryMenu.click();
  }
}
