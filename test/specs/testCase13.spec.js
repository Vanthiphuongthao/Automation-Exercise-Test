// test\specs\testCase13.spec.js
import homePage from "../pageobjects/homePage.page.js";
import cartPage from "../pageobjects/cartPage.page.js";
import productDetailPage from "../pageobjects/productDetailPage.page.js";

describe("Test Case 13: Verify Product quantity in Cart", () => {
  it("Should verify that product is added to cart with correct quantity", async () => {
    await homePage.open();
    await expect(homePage.girlImgResponsive).toBeDisplayed();

    await homePage.viewProduct1Button.click();
    await expect(productDetailPage.productName).toBeDisplayed();

    await productDetailPage.increaseQuantity(4);
    await productDetailPage.clickAddToCart();
    await productDetailPage.clickViewCart();

    const qtys = await cartPage.getCartQuantities();
    console.log("Quantity values in cart: ", qtys);
    expect(qtys[0]).toContain("4");
  });
});
