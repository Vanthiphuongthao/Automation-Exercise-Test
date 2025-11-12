// test\specs\testCase5.spec.js
import homePage from "../pageobjects/homePage.page.js";
import signupLoginPage from "../pageobjects/signupLogin.page.js";
import accountPage from "../pageobjects/accountPage.page.js";
import { existingUser } from "../../resources/existingUser.js";

describe("Test Case 5: Register User with existing email", () => {
  it("Should show error message when registering with existing email", async () => {
    // Launch browser & verify that homepage is visible successfully
    await expect(await homePage.verifyHomePageVisible()).toBeDisplayed();

    await homePage.signupLoginButton.click();
    await expect(signupLoginPage.newUserSignupText).toBeDisplayed();

    //enter name & email
    await signupLoginPage.inputName.setValue(existingUser.name);
    await signupLoginPage.inputEmail.setValue(existingUser.email);
    await signupLoginPage.btnSignup.click();

    //verify message
    await expect(signupLoginPage.errorSignupMsg).toBeDisplayed();
  });
});
