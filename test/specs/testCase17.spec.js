import homePage from "../pageobjects/homePage.page.js";
import cartPage from "../pageobjects/cartPage.page.js";
import { addProductsToCart } from "../helpers/addProductsToCart.helpers.js";

describe("Test Case 17: Remove Products from Cart", () => {
  it("Should remove products from cart and show empty cart", async () => {
    // launch browser & verify
    await homePage.open();
    await expect(homePage.girlImgResponsive).toBeDisplayed();

    // add products to cart & verify cart page visible
    await addProductsToCart();

    // Click 'X' button corresponding to particular product
    await expect(cartPage.xBtn1).toBeDisplayed();
    await cartPage.xBtn1.click();

    await expect(cartPage.xBtn2).toBeDisplayed();
    await cartPage.xBtn2.click();

    await expect(cartPage.emptyCart).toBeDisplayed();
  });
});
