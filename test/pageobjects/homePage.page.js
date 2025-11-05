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

  get recommendedItems() {
    return $("div.recommended_items h2");
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

  // async homePageIsVisible() {
  //   await this.girlImgResponsive.waitForDisplayed();
  //   return this.girlImgResponsive;
  // }

  // async signupLoginClick() {
  //   await this.signupLoginButton.waitForClickable();
  //   await this.signupLoginButton.click();
  //   return new LoginSignupPage();
  // }

  // async contactUsButtonClick() {
  //   await this.contactUsButton.click();
  //   return new ContactUsPage();
  // }

  // async testCasesButtonClick() {
  //   await this.testCasesButton.click();
  //   return new TestCasesPage();
  // }

  // async productsButtonClick() {
  //   await this.productsButton.click();
  //   return new ProductsPage();
  // }

  // async cartButtonClick() {
  //   await this.cartButton.click();
  //   return new CartPage();
  // }

  // async viewProduct1ButtonClick() {
  //   await this.viewProduct1Button.waitForClickable();
  //   await this.viewProduct1Button.click();
  //   return new ProductDetailPage();
  // }

  // async womenCategoryClick() {
  //   await this.womenCategory.waitForClickable();
  //   await this.womenCategory.click();
  //   return this;
  // }

  // async dressCategoryClick() {
  //   await this.dressCategory.waitForClickable();
  //   await this.dressCategory.click();
  //   return new ProductsPage();
  // }

  // async blueTopAddToCartButtonClick() {
  //   await this.blueTopAddToCartButton.waitForClickable();
  //   await this.blueTopAddToCartButton.click();
  //   return this;
  // }

  // async viewCartButtonClick() {
  //   await this.viewCartButton.waitForDisplayed();
  //   await this.viewCartButton.click();
  //   return new CartPage();
  // }

  // async scrollUpButtonClick() {
  //   await this.scrollUpButton.waitForClickable();
  //   await this.scrollUpButton.click();
  //   return this;
  // }

  // async fillSubscribe(email) {
  //   await this.subscribeEmailInput.setValue(email);
  //   await this.subscribeButton.waitForClickable();
  //   await this.subscribeButton.click();
  //   return this;
  // }
}

export default new HomePage();
