import homePage from "../pageobjects/homePage.page.js";
import accountPage from "../pageobjects/accountPage.page.js";
import productsPage from "../pageobjects/productsPage.page.js";
import cartPage from "../pageobjects/cartPage.page.js";
import checkoutPage from "../pageobjects/checkoutPage.page.js";
import paymentPage from "../pageobjects/paymentPage.page.js";
import { signupNewUser } from "../helpers/signup.helper.js";
import { accountNewUser } from "../../resources/accountNewUser.js";
import { paymentDetails } from "../../resources/paymentDetails.js";

describe("Test Case 14: Place Order - Register while Checkout", () => {
  it("should register new user during checkout", async () => {
    //launch browser & verify
    await homePage.open();
    await expect(homePage.girlImgResponsive).toBeDisplayed();

    //add product to Cart & view cart
    await homePage.productsButton.click();
    await expect(await productsPage.getTitleAllProducts()).toContain(
      "ALL PRODUCTS"
    );
    await productsPage.addProductsToCart();
    await expect(cartPage.shoppingCart).toBeDisplayed();
    console.log(
      "✅ SUCCESSFULLY! Step reached home opened & added product to cart"
    );

    //proceed to checkout
    await cartPage.clickProceedToCheckOut();
    await cartPage.signupLoginBtn.click();
    console.log(
      "✅ SUCCESSFULLY! Step click Proceed to checkout & signup new user"
    );

    // click register/login -> signup -> verify account created
    // & Verify "Logged in as username"
    const user = await signupNewUser(accountNewUser);
    console.log("SUCCESSFULLY! Created user:", user.email);

    // go to cart & proceed to checkout
    await homePage.cartButton.click();
    await cartPage.clickProceedToCheckOut();
    console.log("✅ SUCCESSFULLY! go to cart again & proceed to checkout");

    // verify address details and order review
    await checkoutPage.verifyAddressSectionDisplayed();
    console.log("✅ SUCCESSFULLY! verify address details & order review");

    // enter description in comment text area & click 'Place Order'
    await checkoutPage.enterCommentAndPlaceOrder("Please deliver ASAP");
    console.log("✅ SUCCESSFULLY! enter cmt & place order");

    // enter payment details & click 'Pay and Confirm Order' button
    await paymentPage.fillPaymentDetails(paymentDetails);
    console.log("✅ SUCCESSFULLY! fill payment details");

    // verify success message
    await paymentPage.alertSuccessMsg.waitForDisplayed({ timeout: 10000 });
    await expect(paymentPage.alertSuccessMsg).toContain(
      "Your order has been placed successfully!"
    );
    console.log("✅ SUCCESSFULLY! verify alert & success msg");

    //deleted account
    await accountPage.deleteAccountBtn.click();
    await expect(accountPage.accountDeletedText).toBeDisplayed();
    await accountPage.btnContinue.click();
    console.log("✅ SUCCESSFULLY! delete account");
  });
});
