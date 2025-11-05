// test\specs\testCase1.spec.js
import homePage from "../pageobjects/homePage.page.js";
import signupLoginPage from "../pageobjects/signupLogin.page.js";
import accountPage from "../pageobjects/accountPage.page.js";
import { accountNewUser } from "../../resources/accountNewUser.js";

describe("Test Case 1: Register User", () => {
  it("Should register and delete user successfully", async () => {
    await homePage.open();
    await expect(homePage.girlImgResponsive).toBeDisplayed();

    // await expect(homePage.homePageIsVisible()).toBeDisplayed();

    await homePage.signupLoginButton.click();
    await expect(signupLoginPage.newUserSignupText).toBeDisplayed();

    //enter name & email + click signup button
    await signupLoginPage.inputName.setValue(accountNewUser.name);
    await signupLoginPage.inputEmail.setValue(accountNewUser.email);
    await signupLoginPage.btnSignup.click();

    //verify 'Enter account information' visible
    await expect(signupLoginPage.enterAccountInfoText).toBeDisplayed();

    //fill details
    await signupLoginPage.titleMr.click();
    await signupLoginPage.password.setValue(accountNewUser.password);
    await signupLoginPage.days.selectByVisibleText(accountNewUser.day);

    await signupLoginPage.months.waitForDisplayed();
    await signupLoginPage.months.selectByVisibleText(accountNewUser.month);

    await signupLoginPage.years.selectByVisibleText(accountNewUser.year);

    // select checkbox
    await signupLoginPage.newsletterCheckbox.click();
    await signupLoginPage.optinCheckbox.click();

    // fill details 2
    await signupLoginPage.firstName.setValue(accountNewUser.firstName);
    await signupLoginPage.lastName.setValue(accountNewUser.lastName);
    await signupLoginPage.company.setValue(accountNewUser.company);
    await signupLoginPage.address1.setValue(accountNewUser.address1);
    await signupLoginPage.address2.setValue(accountNewUser.address2);
    await signupLoginPage.country.selectByVisibleText(accountNewUser.country);
    await signupLoginPage.state.setValue(accountNewUser.state);
    await signupLoginPage.city.setValue(accountNewUser.city);
    await signupLoginPage.zipcode.setValue(accountNewUser.zipcode);
    await signupLoginPage.mobileNumber.setValue(accountNewUser.mobileNumber);

    await signupLoginPage.createAccountBtn.click();
    await expect(accountPage.accountCreatedText).toBeDisplayed();

    await accountPage.btnContinue.click();
    await expect(accountPage.loggedInAs).toBeDisplayed();

    //delete account
    await accountPage.deleteAccountBtn.click();
    await expect(accountPage.accountDeletedText).toBeDisplayed();
    await accountPage.btnContinue.click();
  });
});
