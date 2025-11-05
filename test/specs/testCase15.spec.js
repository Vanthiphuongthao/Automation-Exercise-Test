import homePage from "../pageobjects/homePage.page";
import checkoutPage from "../pageobjects/checkoutPage.page.js";
import paymentPage from "../pageobjects/paymentPage.page.js";
import accountPage from "../pageobjects/accountPage.page.js";
import cartPage from "../pageobjects/cartPage.page.js";
import { addProductsToCart } from "../helpers/addProductsToCart.helpers.js";
import { signupNewUser } from "../helpers/signup.helper.js";
import { accountNewUser } from "../../resources/accountNewUser.js";
import { paymentDetails } from "../../resources/paymentDetails.js";

describe("Test Case 15: Place Order - Register before Checkout", () => {
  it("Should register new user before checkout", async () => {
    // launch broswer & verify
    await homePage.open();
    await expect(homePage.girlImgResponsive).toBeDisplayed();

    const user = await signupNewUser(accountNewUser);
    console.log("Created user: ", user.email);

    // add products to cart & proceed to checkout
    await addProductsToCart();
    await cartPage.clickProceedToCheckOut();

    // verify address details and order review
    await checkoutPage.verifyAddressSectionDisplayed();

    //enter description in cmt & click place order
    await checkoutPage.enterCommentAndPlaceOrder("Please deliver ASAP");

    //enter payment details & click pay and confirm btn
    await paymentPage.fillPaymentDetails(paymentDetails);

    //verify alert msg
    await expect(await paymentPage.getSuccessMsgText()).toContain(
      "Congratulations! Your order has been confirmed!"
    );

    //deleted account
    await accountPage.deleteAccountBtn.click();
    await expect(accountPage.accountDeletedText).toBeDisplayed();
    await accountPage.btnContinue.click();
  });
});
