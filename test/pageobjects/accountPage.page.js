// test\pageobjects\accountPage.page.js
class accountPage {
  get accountCreatedText() {
    return $('//b[text()="Account Created!"]');
  }
  get btnContinue() {
    return $('a[data-qa="continue-button"]');
  }
  get loggedInAs() {
    return $('//a[contains(text(),"Logged in as")]');
  }
  get deleteAccountBtn() {
    return $('a[href="/delete_account"]');
  }
  get accountDeletedText() {
    return $('//b[text()="Account Deleted!"]');
  }
  get logoutBtn() {
    return $('a[href="/logout"]');
  }
}
export default new accountPage();
