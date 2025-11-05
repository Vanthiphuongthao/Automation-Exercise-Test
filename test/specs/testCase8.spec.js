// test\specs\testCase8.spec.js
import homePage from "../pageobjects/homePage.page.js";
import productsPage from "../pageobjects/productsPage.page.js";
import productDetailsPage from "../pageobjects/productDetailPage.page.js";

describe("Test Case 8: Verify All Products and product detail page", () => {
  it("Should display all products and show correct product detail info", async () => {
    await homePage.open();
    await expect(homePage.girlImgResponsive).toBeDisplayed();

    await homePage.productsButton.click();
    const titleText = await productsPage.getTitleAllProducts();
    await expect(titleText).toContain("ALL PRODUCTS");

    //view product of 1st products
    await productsPage.clickViewProductOfFirstProduct();
    await expect(productDetailsPage.productName).toBeDisplayed();

    // verify product details
    const name = await productDetailsPage.getProductName();
    const category = await productDetailsPage.getProductCategory();
    const price = await productDetailsPage.getProductPrice();
    const availability = await productDetailsPage.getProductAvailability();
    const condition = await productDetailsPage.getProductCondition();
    const brand = await productDetailsPage.getProductBrand();

    console.log(`
      Product Name: ${name}
      Category: ${category}
      Price: ${price}
      Availability: ${availability}
      Condition: ${condition}
      Brand: ${brand}
      `);
    expect(name).not.toBe("");
    expect(category).not.toBe("");
    expect(price).not.toBe("");
    expect(availability).not.toBe("");
    expect(condition).not.toBe("");
    expect(brand).not.toBe("");
  });
});
