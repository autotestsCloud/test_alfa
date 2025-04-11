import { test, expect, Page } from '@playwright/test';
import { manualLogin } from '../helpers';
import BasePage from '../page-objects/base-page';

test.describe('Корзина @basket @e2e', () => {
  let page: Page;
  let basePage: BasePage;

  test.beforeAll(async ({ request }) => {
    page = await manualLogin(page);
    basePage = new BasePage(page);
  });

  test.beforeEach(async () => {
    await basePage.openBasePage();
    await basePage.basketBtn.waitFor();
  });


  test('Тест-кейс 1. Переход в пустую корзину', async ({ request }) => {
    await test.step('Кликнуть на иконку корзины', async () => {
      await basePage.basketBtn.click();
      await expect(basePage.basketDropdownMenu).toBeVisible();
    });

    await test.step('Заполнить поля и создать', async () => {
      await
    });
  });

  test.afterAll(async () => {
    await page.close();
  });
});