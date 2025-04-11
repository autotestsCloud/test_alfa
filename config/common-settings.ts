import {
  baseUrls,
  e2eAuth,
} from '../config/env-settings';

export const env = process.env.ENV;
export const siteBaseUrl = baseUrls[env];
let authSettings = e2eAuth;

export const creds: { password: string; login: string } = {
  login: <string>authSettings.get(env)?.login,
  password: <string>authSettings.get(env)?.password,
};
