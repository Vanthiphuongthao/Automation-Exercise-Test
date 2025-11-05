import homePage from "../pageobjects/homePage.page.js";
import productsPage from "../pageobjects/productsPage.page.js";

describe("Test Case 18: View Category Products", () => {
  it("Should display products by selected category", async () => {
    await homePage.open();
    await expect(homePage.girlImgResponsive).toBeDisplayed();

    await expect(homePage.categories).toBeDisplayed();

    await homePage.womenCategory.click();

    await expect(homePage.dressCategory).toBeDisplayed();
    await homePage.dressCategory.click();

    const categoryTitle = await $("h2.title.text-center");
    await expect(categoryTitle).toBeDisplayed();
    await expect(await categoryTitle.getText()).toContain(
      "Women - Dress Products"
    );
  });
});
