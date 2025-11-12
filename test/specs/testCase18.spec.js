import homePage from "../pageobjects/homePage.page.js";
import productsPage from "../pageobjects/productsPage.page.js";

describe("Test Case 18: View Category Products", () => {
  it("Should display products by selected category", async () => {
    // Launch browser & verify that homepage is visible successfully
    await expect(await homePage.verifyHomePageVisible()).toBeDisplayed();

    await expect(homePage.categories).toBeDisplayed();

    await homePage.womenCategory.click();

    await expect(homePage.dressCategory).toBeDisplayed();
    await homePage.dressCategory.click();

    //Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
    const title = await productsPage.getTitleAllProducts();
    const normalizedTitle = title.replace(/\s+/g, " ").trim().toLowerCase();
    await expect(normalizedTitle).toContain("women - dress products");

    // click on 'TShirts' - sub-category link of 'Men' category & verify that user is navigated to that category page
    await productsPage.clickMenCategory();
    await productsPage.clickTShirtsCategory();
    const titleTShirtsMen = await productsPage.getTitleAllProducts();
    const normalizedTitleMen = titleTShirtsMen
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
    await expect(normalizedTitleMen).toContain("men - tshirts products");
  });
});
