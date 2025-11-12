// test\specs\testCase4.spec.js
import homePage from "../pageobjects/homePage.page.js";
import signupLoginPage from "../pageobjects/signupLogin.page.js";
import accountPage from "../pageobjects/accountPage.page.js";
import { existingUser } from "../../resources/existingUser.js";

describe("Test Case 4: Logout User", () => {
  it("Should login and logout successfully", async () => {
    // Launch browser & verify that homepage is visible successfully
    await expect(await homePage.verifyHomePageVisible()).toBeDisplayed();

    await homePage.signupLoginButton.click();
    await expect(signupLoginPage.loginText).toBeDisplayed();

    //enter name & email
    await signupLoginPage.loginEmail.setValue(existingUser.email);
    await signupLoginPage.loginPassword.setValue(existingUser.password);
    await signupLoginPage.btnLogin.click();

    //verify 'Logged in as username'
    await expect(accountPage.loggedInAs).toBeDisplayed();

    //logout
    await accountPage.logoutBtn.click();

    //verify message
    await expect(signupLoginPage.loginText).toBeDisplayed();
  });
});
