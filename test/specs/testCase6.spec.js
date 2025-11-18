import homePage from "../pageobjects/homePage.page.js";
import contactUsPage from "../pageobjects/contactUsPage.page.js";

describe("Test Case 6: Contact Us Form", () => {
  it("Should allow user to submit the contact us form successfully", async () => {
    // Launch browser & verify that homepage is visible successfully
    await expect(await homePage.verifyHomePageVisible()).toBeDisplayed();

    await homePage.contactUsButton.click();
    await expect(await contactUsPage.getTitleContactUs()).toContain(
      "CONTACT US"
    );
    await expect(await contactUsPage.getInTouch).toBeDisplayed();

    await contactUsPage.fillForm();
    await contactUsPage.clickSubmitButton();
    await contactUsPage.acceptAlert();

    // verify success message
    const successMsg = await contactUsPage.getAlertSuccessText();
    expect(successMsg).toContain(
      "Success! Your details have been submitted successfully."
    );

    //
    await contactUsPage.clickHomePageButton();
    await expect(await homePage.girlImgResponsive).toBeDisplayed();
  });
});
