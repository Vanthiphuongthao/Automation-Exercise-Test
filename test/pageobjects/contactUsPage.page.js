import path from "path";
class contactUsPage {
  // ELEMENTS
  get titleContactUs() {
    return $(".title.text-center");
  }
  get getInTouch() {
    return $("h2.title:nth-child(2)");
  }
  get nameInput() {
    return $("[name='name']");
  }
  get emailInput() {
    return $("[name='email']");
  }
  get subjectInput() {
    return $("[name='subject']");
  }

  get messageInput() {
    return $("#message");
  }
  get uploadFileInput() {
    return $("[name='upload_file']");
  }
  get submitButton() {
    return $("[name='submit']");
  }

  get alertSuccess() {
    return $(".status.alert.alert-success");
  }
  get homePageButton() {
    return $("a.btn.btn-success");
  }

  //ACTIONS
  async getTitleContactUs() {
    return await this.titleContactUs.getText();
  }

  async fillForm() {
    await this.nameInput.setValue("User");
    await this.emailInput.setValue("user@example.com");
    await this.subjectInput.setValue("Test subject");

    await this.messageInput.setValue(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis eros eget cursus placerat. " +
        "Pellentesque id porttitor est. Morbi aliquet massa sit amet finibus fermentum. Pellentesque eu ante a nunc pulvinar blandit a a orci. " +
        "Mauris massa tellus, posuere vitae ante vel, feugiat sodales ante. Suspendisse commodo diam venenatis scelerisque ornare."
    );

    // Upload file
    const filePath = path.join(process.cwd(), "resources/sample.txt");
    //"D:\autom-ex-wdio\resources\sample.txt"
    const remoteFilePath = await browser.uploadFile(filePath);
    await this.uploadFileInput.setValue(remoteFilePath);
  }

  async clickSubmitButton() {
    await this.submitButton.click();
  }

  async acceptAlert() {
    try {
      // Chờ alert xuất hiện trong 3 giây
      await browser.waitUntil(async () => await browser.isAlertOpen(), {
        timeout: 3000,
        timeoutMsg: "No alert appeared within 3 seconds",
      });
      await browser.acceptAlert();
      console.log("✅ Alert accepted successfully");
    } catch (error) {
      console.warn("⚠️ No alert found or already closed. Continuing test...");
    }
  }

  async getAlertSuccessText() {
    await browser.pause(5000);
    await this.alertSuccess.waitForDisplayed({ timeout: 5000 });
    const text = await this.alertSuccess.getText();
    return text.trim();
  }

  async clickHomePageButton() {
    await this.homePageButton.click();
  }
}

export default new contactUsPage();
