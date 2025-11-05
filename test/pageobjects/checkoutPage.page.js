class checkoutPage {
  //ELEMENTS
  get addressDeliveryList() {
    return $$("//ul[contains(@id, 'address_delivery')]//li");
  }
  get addressInvoiceList() {
    return $$("//ul[contains(@id, 'address_invoice')]//li");
  }
  get totalAmount() {
    return $$("//section/div/div[5]/table/tbody/tr[3]/td[4]/p");
  }
  get inputComment() {
    return $("textarea[name='message']");
  }
  get placeOrderBtn() {
    return $("a[href='/payment']");
  }

  // ACTIONS
  async getAddressDelivery() {
    const elements = await this.addressDeliveryList;
    return Promise.all(elements.map(async (el) => await el.getText()));
  }
  async getAddressInvoice() {
    const elements = await this.addressInvoiceList;
    return Promise.all(elements.map(async (el) => await el.getText()));
  }
  async getTotalAmount() {
    return await this.totalAmount.getText();
  }
  async enterCommentAndPlaceOrder(text) {
    await this.inputComment.setValue(text);
    await this.placeOrderBtn.scrollIntoView();
    await this.placeOrderBtn.click();
  }

  // add more helper
  async verifyAddressSectionDisplayed() {
    const deliveryEls = await this.addressDeliveryList;
    const invoiceEls = await this.addressInvoiceList;

    for (const el of [...deliveryEls, ...invoiceEls]) {
      await expect(el).toBeDisplayed();
    }
  }
}

export default new checkoutPage();
