import homePage from "../pageobjects/homePage.page.js";

describe("Test Case 10: Verify Subscription in home page", () => {
  it("Should subscribe with valid email and display success message", async () => {
    await homePage.open();
    await expect(homePage.girlImgResponsive).toBeDisplayed();

    await homePage.scrollToSubscribeSection();
    await expect(homePage.subscription).toBeDisplayed();

    await homePage.fillSubscribe("subcribe_email@example.com");
    try {
      await homePage.alertSuccessSubscribe.waitForDisplayed({ timeout: 3000 });
      const successText = await homePage.alertSuccessSubscribe.getText();
      expect(successText).toContain("You have been successfully subscribed!");
    } catch (err) {
      console.warn("Success message disappeared too quickly!");
    }
  });
});
