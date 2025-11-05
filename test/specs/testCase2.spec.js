// test\specs\testCase2.spec.js

import homePage from "../pageobjects/homePage.page.js";
import signupLoginPage from "../pageobjects/signupLogin.page.js";
import accountPage from "../pageobjects/accountPage.page.js";
import { existingUser } from "../../resources/existingUser.js";

describe("Test Case 2: Login User with correct email and password", () => {
  it("Should login with valid credentials", async () => {
    await homePage.open();
    await expect(homePage.girlImgResponsive).toBeDisplayed();

    await homePage.signupLoginButton.click();
    await expect(signupLoginPage.loginText).toBeDisplayed();

    //enter name & email
    await signupLoginPage.loginEmail.setValue(existingUser.email);
    await signupLoginPage.loginPassword.setValue(existingUser.password);
    await signupLoginPage.btnLogin.click();

    //verify 'Logged in as username'
    await expect(accountPage.loggedInAs).toBeDisplayed();
  });
});
