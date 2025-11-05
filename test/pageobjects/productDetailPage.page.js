class productDetailPage {
  // ELEMENTS
  get productName() {
    return $("div.product-information h2");
  }
  get productCategory() {
    return $("//section/div/div/div[2]/div[2]/div[2]/div/p[1]");
  }
  get productPrice() {
    return $("div.product-information span span");
  }
  get productAvailability() {
    return $("//section/div/div/div[2]/div[2]/div[2]/div/p[2]");
  }
  get productCondition() {
    return $("//section/div/div/div[2]/div[2]/div[2]/div/p[3]");
  }
  get productBrand() {
    return $("//section/div/div/div[2]/div[2]/div[2]/div/p[4]");
  }
  get quantityInput() {
    return $("#quantity");
  }
  get addToCartBtn() {
    return $("button.btn.btn-default.cart");
  }
  get viewCartBtn() {
    return $("a[href='/view_cart'] u");
  }
  get userWriteReview() {
    return $("a[href='#reviews']");
  }
  get userNameInput() {
    return $("#name");
  }
  get emailAddress() {
    return $("#email");
  }
  get addReview() {
    return $("#review");
  }
  get submitBtn() {
    return $("#button-review");
  }
  get successMsg() {
    return $("div.alert-success.alert span");
  }

  // ACTIONS
  async getProductName() {
    await this.productName.waitForDisplayed();
    return await this.productName.getText();
  }
  async getProductCategory() {
    return await this.productCategory.getText();
  }
  async getProductPrice() {
    return await this.productPrice.getText();
  }
  async getProductAvailability() {
    return await this.productAvailability.getText();
  }
  async getProductCondition() {
    return await this.productCondition.getText();
  }
  async getProductBrand() {
    return await this.productBrand.getText();
  }
  async increaseQuantity(value) {
    await this.quantityInput.waitForDisplayed();
    await this.quantityInput.clearValue();
    await this.quantityInput.setValue(value);
  }
  async clickAddToCart() {
    await this.addToCartBtn.waitForClickable();
    await this.addToCartBtn.click();
  }
  async clickViewCart() {
    await this.viewCartBtn.waitForClickable();
    await this.viewCartBtn.click();
  }
  async clickUserWriteReview() {
    await this.userWriteReview.waitForClickable();
    await this.userWriteReview.click();
  }
  async fillReview(name, email, textReview) {
    await this.userNameInput.waitForDisplayed();
    await this.userNameInput.setValue(name);
    await this.emailAddress.setValue(email);
    await this.addReview.setValue(
      textReview ||
        "I recently bought this product and I’m really satisfied with the quality. " +
          "The material feels durable and looks exactly like the photos on the website. " +
          "Shipping was fast and the packaging was neat. Definitely worth the price!"
    );
    await this.submitBtn.click();
  }
  async getSuccessMsg() {
    await this.successMsg.waitForDisplayed();
    return await this.successMsg.getText();
  }
}

export default new productDetailPage();
