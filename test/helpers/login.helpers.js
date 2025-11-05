import homePage from "../pageobjects/homePage.page";
import signupLoginPage from "../pageobjects/signupLogin.page.js";
import accountPage from "../pageobjects/accountPage.page.js";
import { existingUser } from "../../resources/existingUser.js";

export async function loginUser() {
  await homePage.open();
  await expect(homePage.girlImgResponsive).toBeDisplayed();

  await homePage.signupLoginButton.click();
  await expect(signupLoginPage.loginText).toBeDisplayed();

  //enter name and email
  await signupLoginPage.loginEmail.setValue(existingUser.email);
  await signupLoginPage.loginPassword.setValue(existingUser.password);
  await signupLoginPage.btnLogin.click();

  // verify 'Logged in as username'
  await expect(accountPage.loggedInAs).toBeDisplayed();
}
