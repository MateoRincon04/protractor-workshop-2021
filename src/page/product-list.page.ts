import { $, ElementFinder } from 'protractor';

export class ProductList {
  private productListMenu: ElementFinder;

  constructor () {
    this.productListMenu = $('#center_column > ul > li > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async selectProductFromList(): Promise<void> {
    await this.productListMenu.click();
  }

  public getProductListMenu(): ElementFinder {
    return this.productListMenu;
  }
}
