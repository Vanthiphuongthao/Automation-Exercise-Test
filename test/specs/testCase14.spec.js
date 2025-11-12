import homePage from "../pageobjects/homePage.page.js";
import accountPage from "../pageobjects/accountPage.page.js";
import cartPage from "../pageobjects/cartPage.page.js";
import checkoutPage from "../pageobjects/checkoutPage.page.js";
import paymentPage from "../pageobjects/paymentPage.page.js";
import { signupNewUser } from "../helpers/signup.helper.js";
import { accountNewUser } from "../../resources/accountNewUser.js";
import { paymentDetails } from "../../resources/paymentDetails.js";
import { addProductsToCart } from "../helpers/addProductsToCart.helpers.js";

describe("Test Case 14: Place Order - Register while Checkout", () => {
  it("should register new user during checkout", async () => {
    // Launch browser & verify that homepage is visible successfully
    await expect(await homePage.verifyHomePageVisible()).toBeDisplayed();

    //add product to Cart & view cart
    await addProductsToCart();

    //proceed to checkout
    await cartPage.clickProceedToCheckOut();
    await cartPage.signupLoginBtn.click();

    // click register/login -> signup -> verify account created
    // & Verify "Logged in as username"
    const user = await signupNewUser(accountNewUser);
    console.log("SUCCESSFULLY! Created user:", user.email);

    // go to cart & proceed to checkout
    await homePage.cartButton.click();
    await cartPage.clickProceedToCheckOut();

    // verify address details and order review
    await checkoutPage.verifyAddressSectionDisplayed();

    // enter description in comment text area & click 'Place Order'
    await checkoutPage.enterCommentAndPlaceOrder("Please deliver ASAP");

    // enter payment details & click 'Pay and Confirm Order' button
    await paymentPage.fillPaymentDetails(paymentDetails);

    // verify success message
    await expect(await paymentPage.getSuccessMsgText()).toContain(
      "Congratulations! Your order has been confirmed!"
    );

    //deleted account
    await accountPage.deleteAccountBtn.click();
    await expect(accountPage.accountDeletedText).toBeDisplayed();
    await accountPage.btnContinue.click();
  });
});
