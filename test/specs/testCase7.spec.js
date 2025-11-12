import homePage from "../pageobjects/homePage.page.js";
import testCasePage from "../pageobjects/testCasePage.page.js";

describe("Test Case 7: Verify Test Cases Page", () => {
  it("Should display test cases page successfully", async () => {
    await homePage.open();
    await expect(homePage.girlImgResponsive).toBeDisplayed();

    await homePage.testCasesButton.click();
    await expect(await testCasePage.getTitleTestCase()).toContain("TEST CASES");
  });
});
