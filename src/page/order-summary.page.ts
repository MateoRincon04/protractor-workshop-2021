import { $, ElementFinder } from 'protractor';

export class OrderSummary {
  private orderSummaryMenu: ElementFinder;

  constructor () {
    this.orderSummaryMenu = $('#center_column > div > p > strong');
  }

  public async orderCompleteness(): Promise<String> {
    return this.orderSummaryMenu.getText();
  }
}
