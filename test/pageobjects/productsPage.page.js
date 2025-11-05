import productDetailPage from "./productDetailPage.page";

class productsPage {
  // ====== Elements =====
  get titleAllProducts() {
    return $(".title.text-center");
  }
  get viewProductOfFirstProductBtn() {
    return $("a[href='/product_details/1']");
  }
  get searchProductInput() {
    return $("#search_product");
  }
  get submitSearchInput() {
    return $("#submit_search");
  }
  get searchResultsNames() {
    return $$("//div[contains(@class, 'productinfo text-center')]//p");
  }
  // get firstProduct() {
  //   return $("(//div[@class='product-image-wrapper'])[1]");
  // }
  // get secondProduct() {
  //   return $("(//div[@class='product-image-wrapper'])[2]");
  // }
  get addToCartBtn1() {
    return $("a[data-product-id='1']");
  }
  get addToCartBtn2() {
    return $("a[data-product-id='2']");
  }
  get continueShoppingBtn() {
    return $("button[data-dismiss='modal']");
  }
  get viewCartBtn() {
    return $("a[href='/view_cart'] u");
  }
  get menCategory() {
    return $("a[href='#Men']");
  }
  get tShirtsCategory() {
    return $("a[href='/category_products/3']");
  }
  get brands() {
    return $("div[class='brands-name']");
  }
  get poloBrand() {
    return $("a[href='/brand_products/Polo']");
  }
  get madameBrand() {
    return $("a[href='/brand_products/Madame']");
  }
  get addBtns() {
    return $$("a[class='btn btn-default add-to-cart']");
  }

  // ===== Actions =====

  // product detail page
  async getTitleAllProducts() {
    return await this.titleAllProducts.getText();
  }
  async clickViewProductOfFirstProduct() {
    await this.viewProductOfFirstProductBtn.click();
  }
  async searchProduct(productName) {
    await this.searchProductInput.setValue(productName);
    await this.submitSearchInput.click();
  }

  async getSearchResultsNames() {
    const results = await this.searchResultsNames;
    const names = [];
    for (const el of results) {
      names.push(await el.getText());
    }
    return names;
  }

  // add products to cart
  async addProductsToCart() {
    // await this.firstProduct.scrollIntoView();
    // await this.firstProduct.moveTo();
    await this.addToCartBtn1.waitForClickable({ timeout: 10000 });
    await this.addToCartBtn1.click();

    await this.continueShoppingBtn.waitForClickable({ timeout: 10000 });
    await this.continueShoppingBtn.click();

    // await this.secondProduct.scrollIntoView();
    // await this.secondProduct.moveTo();
    await this.addToCartBtn2.waitForClickable({ timeout: 10000 });
    await this.addToCartBtn2.click();

    await this.viewCartBtn.waitForClickable({ timeout: 10000 });
    await this.viewCartBtn.click();
  }

  async clickMenCategory() {
    await this.menCategory.waitForClickable({ timeout: 10000 });
    await this.menCategory.click();
  }

  async clickTShirtsCategory() {
    await this.tShirtsCategory.waitForClickable({ timeout: 10000 });
    await this.tShirtsCategory.click();
  }

  async clickPoloBrand() {
    await this.poloBrand.waitForClickable({ timeout: 10000 });
    await this.poloBrand.click();
  }

  async clickMadameBrand() {
    await this.madameBrand.waitForClickable({ timeout: 10000 });
    await this.madameBrand.click();
  }

  async addAllProducts() {
    const btns = await this.addBtns;
    for (let i = 0; i < buttons.length; i += 2) {
      await btns[i].waitForClickable({ timeout: 10000 });
      await btns[i].click();
      await this.continueShoppingBtn.waitForClickable({ timeout: 10000 });
      await this.continueShoppingBtn.click();
    }
  }
}

export default new productsPage();
