import { ElementHandle, Locator, Page } from '@playwright/test';
import {siteBaseUrl} from "../config/common-settings";

export class Component {

  constructor(protected page: Page) {
    this.page = page;
  }

  get basketBtn(): Locator {
    return this.page.locator('#dropdownBasket');
  }

  get itemsCount(): Locator {
    return this.page.locator('[class^="basket-count-items"]');
  }

  get basketDropdownMenu(): Locator {
    return this.page.locator('[aria-labelledby="dropdownBasket"]');
  }

  get openBasketBtn(): Locator {
    return this.basketDropdownMenu.locator('[href="/basket"]');
  }

  get clearBasketBtn(): Locator {
    return this.basketDropdownMenu.locator('[class*="actionClearBasket"]');
  }

  async openDropdownByIndex(index: number) {
    await this.page.locator(`[class^="selectWidget"] >> nth=${index}`).click();
    await this.dropdownMenu.waitFor({ state: 'visible' });
  }

  async openBasePage(uri?: string): Promise<void> {
    await this.page.goto(siteBaseUrl + uri, {waitUntil: 'commit'});
  }
}
