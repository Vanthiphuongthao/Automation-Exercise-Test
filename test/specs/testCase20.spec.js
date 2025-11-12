import homePage from "../pageobjects/homePage.page.js";
import productsPage from "../pageobjects/productsPage.page.js";
import { loginUser } from "../helpers/login.helpers.js";
import { verifyProductsInCart } from "../helpers/verifyProductsInCart.helpers.js";
import { existingUser } from "../../resources/existingUser.js";

describe("Test Case 20: Search Products and Verify Cart After Login", () => {
  it("Should retain cart items after login", async () => {
    // Launch browser & verify that homepage is visible successfully
    await expect(await homePage.verifyHomePageVisible()).toBeDisplayed();

    await homePage.productsButton.click();
    await expect(await productsPage.getTitleAllProducts()).toContain(
      "ALL PRODUCTS"
    );

    // enter product name & click search btn & verify
    const productName = "T-Shirt";
    await productsPage.searchProduct(productName);
    await expect(await productsPage.getTitleAllProducts()).toContain(
      "SEARCHED PRODUCTS"
    );
    const searchResults = await productsPage.getSearchResultsNames();
    await expect(searchResults.length).toBeGreaterThan(0);
    for (const name of searchResults) {
      await expect(name.toLowerCase()).toContain(
        productName.toLocaleLowerCase()
      );
    }
    await productsPage.addAllProducts();

    //use function verify products in card
    await verifyProductsInCart();

    // login user
    await loginUser(existingUser);

    //verify products in card again
    await homePage.cartButton.waitForClickable({ timeout: 10000 });
    await homePage.cartButton.click();
    await verifyProductsInCart();
  });
});
