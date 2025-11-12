import homePage from "../pageobjects/homePage.page.js";
import productsPage from "../pageobjects/productsPage.page.js";

describe("Test Case 19: View & Cart Brand Products", () => {
  it("Should display products by selected brand", async () => {
    // Launch browser & verify that homepage is visible successfully
    await expect(await homePage.verifyHomePageVisible()).toBeDisplayed();

    await homePage.productsButton.click();

    await expect(productsPage.poloBrand).toBeDisplayed();
    await productsPage.clickPoloBrand();

    // verify Polo Brand page
    const titlePolo = await productsPage.getTitleAllProducts();
    const normalizedTitlePolo = titlePolo
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
    await expect(normalizedTitlePolo).toContain("brand - polo products");

    // click on 'H&M' Brand & verify H&M brand page
    await productsPage.clickMadameBrand();
    const titleMadame = await productsPage.getTitleAllProducts();
    const normalizedTitleMadame = titleMadame
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
    await expect(normalizedTitleMadame).toContain("brand - madame products");
  });
});
