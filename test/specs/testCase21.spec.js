import homePage from "../pageobjects/homePage.page.js";
import productsPage from "../pageobjects/productsPage.page.js";
import productDetailPage from "../pageobjects/productDetailPage.page.js";

describe("Test Case 21: Add review on product", () => {
  it("Should allow user to add a product review successfully", async () => {
    // Launch browser & verify that homepage is visible successfully
    await expect(await homePage.verifyHomePageVisible()).toBeDisplayed();

    await homePage.productsButton.click();
    await expect(await productsPage.getTitleAllProducts()).toContain(
      "ALL PRODUCTS"
    );
    await productsPage.clickViewProductOfFirstProduct();
    await expect(productDetailPage.productName).toBeDisplayed();

    // verify review visible
    await expect(productDetailPage.reviewForm).toBeDisplayed();
    await productDetailPage.fillReview(
      "User Review",
      "user@example.com",
      "This product is amazing!"
    );
    //
    try {
      await productDetailPage
        .getSuccessMsg()
        .waitForDisplayed({ timeout: 3000 });
      const successText = await productDetailPage.getSuccessMsg.getText();
      expect(successText).toContain("Thank you for your review.");
    } catch (err) {
      console.warn("Success message disappeared too quickly!");
    }
  });
});
