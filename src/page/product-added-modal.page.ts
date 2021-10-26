import { $, ElementFinder } from 'protractor';

export class ProductAddedModal {
  private productAddedMenu: ElementFinder;

  constructor () {
    this.productAddedMenu = $('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a[title="Proceed to checkout"]');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.productAddedMenu.click();
  }

  public getProductAddedMenu(): ElementFinder {
    return this.productAddedMenu;
  }
}
