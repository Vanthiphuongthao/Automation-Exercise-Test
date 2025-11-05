import homePage from "../pageobjects/homePage.page.js";
import signupLoginPage from "../pageobjects/signupLogin.page.js";
import accountPage from "../pageobjects/accountPage.page.js";

export async function signupNewUser(accountData) {
  await homePage.open();
  await expect(homePage.girlImgResponsive).toBeDisplayed();

  await homePage.signupLoginButton.click();
  await expect(signupLoginPage.newUserSignupText).toBeDisplayed();

  // create unique email
  const uniqueEmail = accountData.email.replace("@", `_${Date.now()}@`);
  console.log(`Creating new user: ${accountData.name} (${uniqueEmail})`);

  // fill signup form
  await signupLoginPage.inputName.setValue(accountData.name);
  await signupLoginPage.inputEmail.setValue(uniqueEmail);
  await signupLoginPage.btnSignup.click();

  await expect(signupLoginPage.enterAccountInfoText).toBeDisplayed();

  // fill user information
  await signupLoginPage.titleMr.click();
  await signupLoginPage.password.setValue(accountData.password);
  await signupLoginPage.days.selectByVisibleText(accountData.day);
  await signupLoginPage.months.selectByVisibleText(accountData.month);
  await signupLoginPage.years.selectByVisibleText(accountData.year);
  await signupLoginPage.newsletterCheckbox.click();
  await signupLoginPage.optinCheckbox.click();
  await signupLoginPage.firstName.setValue(accountData.firstName);
  await signupLoginPage.lastName.setValue(accountData.lastName);
  await signupLoginPage.company.setValue(accountData.company);
  await signupLoginPage.address1.setValue(accountData.address1);
  await signupLoginPage.address2.setValue(accountData.address2);
  await signupLoginPage.country.selectByVisibleText(accountData.country);
  await signupLoginPage.state.setValue(accountData.state);
  await signupLoginPage.city.setValue(accountData.city);
  await signupLoginPage.zipcode.setValue(accountData.zipcode);
  await signupLoginPage.mobileNumber.setValue(accountData.mobileNumber);

  // create account
  await signupLoginPage.createAccountBtn.click();
  await expect(accountPage.accountCreatedText).toBeDisplayed();
  await accountPage.btnContinue.click();
  await expect(accountPage.loggedInAs).toBeDisplayed();

  console.log("Account created successfully!");
  return { ...accountData, email: uniqueEmail };
}
