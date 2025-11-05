class paymentPage {
  // ELEMENTS
  get nameOnCardInput() {
    return $("input[data-qa='name-on-card']");
  }
  get cardNumberInput() {
    return $("input[data-qa='card-number']");
  }
  get cvcInput() {
    return $("input[data-qa='cvc']");
  }
  get expirationMonthInput() {
    return $("input[data-qa='expiry-month']");
  }
  get expirationYearInput() {
    return $("input[data-qa='expiry-year']");
  }
  get payAndConfirmOrderBtn() {
    return $("button[data-qa='pay-button']");
  }
  get alertSuccessMsg() {
    return $("//div[contains(@id, 'success_message')]/div");
  }
  get successMsg() {
    return $("div.col-sm-9.col-sm-offset-1 p");
  }
  get downloadInvoiceBtn() {
    return $("a.btn-default.check_out");
  }
  get continueBtn() {
    return $("a[data-qa='continue-button']");
  }

  // ACTIONS

  /**
   * Fill payment details
   * @param {Object} data - card info {nameOnCard, cardNumber, cvc, expirationMonth, expirationYear}
   */
  async fillPaymentDetails(data) {
    await this.nameOnCardInput.setValue(data.nameOnCard);
    await this.cardNumberInput.setValue(data.cardNumber);
    await this.cvcInput.setValue(data.cvc);
    await this.expirationMonthInput.setValue(data.expirationMonth);
    await this.expirationYearInput.setValue(data.expirationYear);
    await this.payAndConfirmOrderBtn.click();
  }

  async getSuccessMsgText() {
    return await this.successMsg.getText();
  }
  async clickDownloadInvoidBtn() {
    return this.downloadInvoiceBtn.click();
  }
  async clickContinueBtn() {
    await this.continueBtn.waitForClickable({ timeout: 5000 });
    await this.continueBtn.click();
    return new HomePage();
  }
}
export default new paymentPage();
