import homePage from "../pageobjects/homePage.page.js";
import productsPage from "../pageobjects/productsPage.page.js";
import cartPage from "../pageobjects/cartPage.page.js";

export async function addProductsToCart() {
  await homePage.productsButton.click();
  await expect(await productsPage.getTitleAllProducts()).toContain(
    "ALL PRODUCTS"
  );
  await productsPage.addProductsToCart();
  await expect(cartPage.shoppingCart).toBeDisplayed();
}
