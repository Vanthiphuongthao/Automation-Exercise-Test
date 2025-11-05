class cartPage {
  // ELEMENTS
  get productNames() {
    return $$("//td[contains(@class, 'cart_description')]//a");
  }
  get cartPrices() {
    return $$("//td[contains(@class, 'cart_price')]/p");
  }
  get cartQuantities() {
    return $$("//td[contains(@class, 'cart_quantity')]/button");
  }
  get cartTotalPrice() {
    return $$("//p[contains(@class, 'cart_total_price')]");
  }
  get shoppingCart() {
    return $("li.active");
  }
  get proceedToCheckoutBtn() {
    return $("a.btn.btn-default.check_out");
  }
  get signupLoginBtn() {
    return $("a[href='/login'] u");
  }
  get xBtn1() {
    return $("a[data-product-id='1']");
  }
  get xBtn2() {
    return $("a[data-product-id='2']");
  }
  get emptyCart() {
    return $("#empty_cart");
  }
  get xBtns() {
    return $$("a.cart_quantity_delete");
  }

  //ACTIONS
  async getProductNames() {
    const names = [];
    for (const el of await this.productNames) {
      names.push(await el.getText());
    }
    return names;
  }

  async getCartPrices() {
    const prices = [];
    for (const el of await this.cartPrices) {
      prices.push(await el.getText());
    }
    return prices;
  }
  async getCartQuantities() {
    const qtys = [];
    for (const el of await this.cartQuantities) {
      qtys.push(await el.getText());
    }
    return qtys;
  }
  async getCartTotalPrice() {
    const totals = [];
    for (const el of await this.cartTotalPrice) {
      totals.push(await el.getText());
    }
    return totals;
  }
  async getShoppingCart() {
    await this.shoppingCart.waitForDisplayed();
    return await this.shoppingCart.getText();
  }
  async clickProceedToCheckOut() {
    await this.proceedToCheckoutBtn.waitForClickable();
    return await this.proceedToCheckoutBtn.click();
  }
  async clickProceedToCheckOutLogged() {
    await this.proceedToCheckoutBtn.waitForClickable();
    await this.proceedToCheckoutBtn.click();
    return new checkoutPage();
  }
}

export default new cartPage();
