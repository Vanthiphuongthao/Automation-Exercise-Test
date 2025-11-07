import cartPage from "../pageobjects/cartPage.page.js";

export async function verifyProductsInCart() {
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
  expect(productNames.length).toBeGreaterThanOrEqual(2);
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
}
