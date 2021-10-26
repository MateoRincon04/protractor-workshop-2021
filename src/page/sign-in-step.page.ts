import { $, ElementFinder } from 'protractor';

export class SignInStep {
  private authenticationMenu: ElementFinder;

  constructor () {
    this.authenticationMenu = $('#SubmitLogin');
  }

  public async signIn(): Promise<void> {
    await $('#email').sendKeys('aperdomobo@gmail.com');
    await $('#passwd').sendKeys('WorkshopProtractor');
    await this.authenticationMenu.click();
  }
}
