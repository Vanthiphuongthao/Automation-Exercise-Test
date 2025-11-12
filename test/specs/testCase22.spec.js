import homePage from "../pageobjects/homePage.page.js";
import cartPage from "../pageobjects/cartPage.page.js";

describe("Test Case 22: Add to Cart from Recommended Items", () => {
  it("Should add recommended product to cart and verify", async () => {
    await homePage.open();
    await expect(homePage.girlImgResponsive).toBeDisplayed();

    await homePage.scrollToRecommendSection();
    const titleRecommendedItems = await homePage.recommendedItems.getText();
    const normalizedTitle = titleRecommendedItems
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
    await expect(normalizedTitle).toContain("recommended items");

    await homePage.firstRecommendedAddToCartBtn.click();
    await homePage.viewCartButton.click();
    //verify
    const productNames = await cartPage.getProductNames();
    const price = await cartPage.getCartPrices();
    const quantities = await cartPage.getCartQuantities();
    const totals = await cartPage.getCartTotalPrice();

    console.log(`
            CART DETAILS:
                Products: ${productNames}
                Prices: ${price}
                Quantities: ${quantities}
                Totals: ${totals}
            `);
    expect(productNames.length).toBeGreaterThanOrEqual(1);
    expect(price.length).toEqual(productNames.length);
    expect(quantities.length).toEqual(productNames.length);
    expect(totals.length).toEqual(productNames.length);

    //check values are valid
    for (let i = 0; i < productNames.length; i++) {
      expect(productNames[i].trim()).not.toEqual("");

      const priceValue = Number(price[i].replace(/[^0-9.]/g, ""));
      const totalValue = Number(totals[i].replace(/[^0-9.]/g, ""));
      const qtyValue = Number(quantities[i].replace(/[^0-9.]/g, ""));

      expect(priceValue).toBeGreaterThan(0);
      expect(qtyValue).toBeGreaterThan(0);
      expect(totalValue).toBeGreaterThan(0);

      console.log(
        `[${i + 1}] ${
          productNames[i]
        } | Price: $${priceValue} | Qty: ${qtyValue} | Total: $${totalValue}`
      );
    }
  });
});
