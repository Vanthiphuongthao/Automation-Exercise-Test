// test\specs\testCase3.spec.js
import homePage from "../pageobjects/homePage.page.js";
import signupLoginPage from "../pageobjects/signupLogin.page.js";

describe("Test Case 3: Login User with incorrect email and password", () => {
  it("Should show error message when using invalid credentials", async () => {
    // Launch browser & verify that homepage is visible successfully
    await expect(await homePage.verifyHomePageVisible()).toBeDisplayed();

    await homePage.signupLoginButton.click();
    await expect(signupLoginPage.loginText).toBeDisplayed();

    //enter name & email
    await signupLoginPage.loginEmail.setValue("wrong_email@example.com");
    await signupLoginPage.loginPassword.setValue("wrongpassword");
    await signupLoginPage.btnLogin.click();

    //verify message
    await expect(signupLoginPage.errorLoginMsg).toBeDisplayed();
  });
});
