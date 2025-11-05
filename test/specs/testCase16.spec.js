import homePage from "../pageobjects/homePage.page.js";
import checkoutPage from "../pageobjects/checkoutPage.page.js";
import paymentPage from "../pageobjects/paymentPage.page.js";
import cartPage from "../pageobjects/cartPage.page.js";
import { addProductsToCart } from "../helpers/addProductsToCart.helpers.js";
import { loginUser } from "../helpers/login.helpers.js";
import { paymentDetails } from "../../resources/paymentDetails.js";

describe("Test Case 16: Place Order - Login before Checkout", () => {
  it("Should logged in before checkout", async () => {
    // launch browser & verify
    await homePage.open();
    await expect(homePage.girlImgResponsive).toBeDisplayed();

    //login User
    await loginUser();

    // add product to cart & proceed to checkout
    await addProductsToCart();
    await cartPage.clickProceedToCheckOut();

    //verify address details and order review
    await checkoutPage.verifyAddressSectionDisplayed();

    //enter description in cmt & click place order
    await checkoutPage.enterCommentAndPlaceOrder("Please deliver ASAP");

    // enter payment details & click pay and confirm btn
    await paymentPage.fillPaymentDetails(paymentDetails);

    // verify alert msg
    await expect(await paymentPage.getSuccessMsgText()).toContain(
      "Congratulations! Your order has been confirmed!"
    );

    // dont delete account bc need for another test case
  });
});
