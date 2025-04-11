import { Locator, Page } from '@playwright/test';
import { Component } from './component';

class LoginPage extends Component {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  get userNameInput(): Locator {
    return this.page.locator('input#loginform-username');
  }

  get passwordInput(): Locator {
    return this.page.locator('input#loginform-password');
  }

  get submitBtn(): Locator {
    return this.page.locator('button[name="login-button"]');
  }
}

export default LoginPage;
