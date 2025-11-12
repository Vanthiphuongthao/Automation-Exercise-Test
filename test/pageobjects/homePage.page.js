// test/pageobjects/home.page.js
// import { $ } from "@wdio/globals";
// import signupLoginPage from "./signupLogin.page.js";
// import ContactUsPage from "./contactUs.page.js";
// import TestCasesPage from "./testCases.page.js";
// import ProductsPage from "./products.page.js";
// import CartPage from "./cart.page.js";
// import ProductDetailPage from "./productDetail.page.js";

class HomePage {
  // ===== Elements =====
  get girlImgResponsive() {
    return $("div.item.active img[alt='demo website for practice']");
  }
  get signupLoginButton() {
    return $("a[href='/login']");
  }
  get contactUsButton() {
    return $("a[href='/contact_us']");
  }
  get testCasesButton() {
    return $("a[href='/test_cases']");
  }
  get productsButton() {
    return $("a[href='/products']");
  }
  get cartButton() {
    return $("a[href='/view_cart']");
  }
  get viewProduct1Button() {
    return $("a[href='/product_details/1']");
  }

  get categories() {
    return $("#accordian");
  }

  get womenCategory() {
    return $("#accordian > div:nth-child(1) h4 a span i");
  }
  get dressCategory() {
    return $("a[href='/category_products/1']");
  }

  get recommendedSection() {
    return $("div#recommended-items");
  }

  get recommendedItems() {
    return $("div.recommended_items h2");
  }

  get firstRecommendedAddToCartBtn() {
    return $("div.recommended_items .item.active .productinfo a.add-to-cart");
  }
  get blueTopAddToCartButton() {
    return $("div#recommended-item-carousel a.btn.btn-default.add-to-cart");
  }
  get viewCartButton() {
    return $("div.modal-content a[href='/view_cart']");
  }

  get scrollUpButton() {
    return $("#scrollUp");
  }
  get fullFledgedPracticeWebsiteForAutomationEngineers() {
    return $("section:nth-of-type(1) h2");
  }

  // Footer
  get subscription() {
    return $("div.single-widget h2");
  }
  get subscribeEmailInput() {
    return $("#susbscribe_email");
  }
  get subscribeButton() {
    return $("#subscribe");
  }
  get alertSuccessSubscribe() {
    return $("#success-subscribe");
  }

  // ===== Actions =====
  open() {
    browser.url("https://www.automationexercise.com/");
  }

  async scrollToRecommendSection() {
    await this.recommendedItems.scrollIntoView();
  }

  async scrollToSubscribeSection() {
    await this.subscription.scrollIntoView();
  }

  // async scrollUpButtonClick() {
  //   await this.scrollUpButton.waitForClickable();
  //   await this.scrollUpButton.click();
  //   return this;
  // }

  async fillSubscribe(email) {
    await this.subscribeEmailInput.setValue(email);
    await this.subscribeButton.waitForClickable();
    await this.subscribeButton.click();
    return this;
  }
}

export default new HomePage();
