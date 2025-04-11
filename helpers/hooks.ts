import { Page } from '@playwright/test';
import {creds, siteBaseUrl} from "../config/common-settings";
import LoginPage from "../page-objects/login-page";

export const manualLogin = async (page: Page, credentials = creds) => {
  const loginPage = new LoginPage(page);
  await page.goto(`${siteBaseUrl}login`);
  await loginPage.userNameInput.fill(credentials.login);
  await loginPage.passwordInput.fill(credentials.password);
  await loginPage.submitBtn.click();
  return page;
};

export const manualLogout = async (page) => {
  await common.loginMenu.click();
  await common.logoutBtn.click();
  await common.userName.waitFor({ state: 'visible' });
};

export const createRandomName = (length?: number) => {
  if (length) {
    let rnd = '';
    while (rnd.length < length) rnd += Math.random().toString(36).substring(2);
    return rnd.substring(0, length);
  } else {
    const timestamp = new Date();
    const options: DateFormat = {
      timeZone: 'Europe/Moscow',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const timeStr = new Intl.DateTimeFormat('en-GB', options)
      .format(timestamp)
      .replace(', ', '_')
      .replace('/', '_')
      .replace(':', '_')
      .replace(':', '_');
    return timeStr;
  }
};
