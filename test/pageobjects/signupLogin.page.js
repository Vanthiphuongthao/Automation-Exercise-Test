// test\pageobjects\signupLogin.page.js
class signupLoginPage {
  //Signup form
  get newUserSignupText() {
    return $('//h2[text()="New User Signup!"]');
  }
  get inputName() {
    return $('input[data-qa="signup-name"]');
  }
  get inputEmail() {
    return $('input[data-qa="signup-email"]');
  }
  get btnSignup() {
    return $('button[data-qa="signup-button"]');
  }

  //Account information form
  get enterAccountInfoText() {
    return $('//b[text()="Enter Account Information"]');
  }

  // --
  get titleMr() {
    return $("#id_gender1");
  }
  get password() {
    return $("input[data-qa='password']");
  }
  get days() {
    return $("#days");
  }
  get months() {
    return $("#months");
  }
  get years() {
    return $("#years");
  }

  //--
  get newsletterCheckbox() {
    return $("#newsletter");
  }
  get optinCheckbox() {
    return $("#optin");
  }

  //Adress Information
  get firstName() {
    return $("input[data-qa='first_name']");
  }
  get lastName() {
    return $("input[data-qa='last_name']");
  }
  get company() {
    return $("input[data-qa='company']");
  }
  get address1() {
    return $("input[data-qa='address']");
  }
  get address2() {
    return $("input[data-qa='address2']");
  }
  get country() {
    return $("#country");
  }
  get state() {
    return $("input[data-qa='state']");
  }
  get city() {
    return $("input[data-qa='city']");
  }
  get zipcode() {
    return $("input[data-qa='zipcode']");
  }
  get mobileNumber() {
    return $("input[data-qa='mobile_number']");
  }

  // --
  get createAccountBtn() {
    return $('button[data-qa="create-account"]');
  }

  //Login form
  get loginText() {
    return $('//h2[text()="Login to your account"]');
  }
  get loginEmail() {
    return $("input[data-qa='login-email']");
  }
  get loginPassword() {
    return $("input[data-qa='login-password']");
  }
  get btnLogin() {
    return $("button[data-qa='login-button']");
  }
  get errorLoginMsg() {
    return $('//p[contains(text(), "Your email or password is incorrect!")]');
  }
  get errorSignupMsg() {
    return $('//p[contains(text(), "Email Address already exist!")]');
  }
}
export default new signupLoginPage();
