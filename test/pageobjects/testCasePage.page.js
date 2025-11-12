class testCasePage {
  // ===== ELEMENTS =====
  get titleTestCase() {
    return $(".title.text-center");
  }

  // ==== ACTIONS =====
  async getTitleTestCase() {
    return await this.titleTestCase.getText();
  }
}
export default new testCasePage();
