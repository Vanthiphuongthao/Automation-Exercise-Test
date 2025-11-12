// test\specs\testCase9.spec.js
import homePage from "../pageobjects/homePage.page.js";
import productsPage from "../pageobjects/productsPage.page.js";

describe("Test Case 9: Search Product", () => {
  it("Should display searched products correctly", async () => {
    // Launch browser & verify that homepage is visible successfully
    await expect(await homePage.verifyHomePageVisible()).toBeDisplayed();

    await homePage.productsButton.click();
    await expect(await productsPage.getTitleAllProducts()).toContain(
      "ALL PRODUCTS"
    );

    const productName = "T-Shirt";
    await productsPage.searchProduct(productName);

    await expect(await productsPage.getTitleAllProducts()).toContain(
      "SEARCHED PRODUCTS"
    );

    const searchResults = await productsPage.getSearchResultsNames();
    await expect(searchResults.length).toBeGreaterThan(0);

    for (const name of searchResults) {
      await expect(name.toLowerCase()).toContain(productName.toLowerCase());
    }
  });
});
