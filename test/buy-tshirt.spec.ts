import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import * as Module from '../src/page';

describe('Open the WebPage', () => {

  it('Then the main page of automationpractice.com was opened', async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('Order a t-shirt', () => {
    const menuContentPage: Module.MenuContentPage = new Module.MenuContentPage();
    const productList: Module.ProductList = new Module.ProductList();
    const productAddedModal: Module.ProductAddedModal = new Module.ProductAddedModal();
    const summaryStep: Module.SummaryStep = new Module.SummaryStep();
    const EC = protractor.ExpectedConditions;

    it('Then the t-shirt should be ordered', async () => {

      await menuContentPage.goToTShirtMenu();
      await browser.wait(EC.elementToBeClickable(productList.getProductListMenu()), 3000);
      await productList.selectProductFromList();
      await browser.wait(EC.elementToBeClickable(productAddedModal.getProductAddedMenu()), 3000);
      await productAddedModal.proceedToCheckout();
      await summaryStep.proceedToSignIn();
    });

    describe('Authentication as a user', () => {
      const signInStep: Module.SignInStep = new Module.SignInStep();

      it("Then the user should be sign into it's account", async () => {
        await signInStep.signIn();
      });

      describe('Select the default address', () => {
        const addressStep: Module.AddressStep = new Module.AddressStep();
        const shippingStep: Module.ShippingStep = new Module.ShippingStep();

        it('Then the order should be set to be shipped at the default address', async () => {
          await addressStep.selectAddress();
          await shippingStep.selectShipping();
          await shippingStep.agreeToTerms();
        });

        describe('Payment process through bankwire', () => {
          const paymentStep: Module.PaymentStep = new Module.PaymentStep();
          const bankPayment: Module.BankPayment = new Module.BankPayment();
          const orderSummary: Module.OrderSummary = new Module.OrderSummary();

          it('Then the t-shirt should be bought', async () => {
            await paymentStep.selectPaymentMethod();
            await bankPayment.confirmOrder();
            await expect(orderSummary.orderCompleteness()).toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
