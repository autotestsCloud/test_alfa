import { Locator, Page } from '@playwright/test';
import { Component } from './component';

class BasePage extends Component {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  get userNameInput(): Locator {
    return this.page.locator('input#loginform-username');
  }
}

export default BasePage;
