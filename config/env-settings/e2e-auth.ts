export const e2eAuth = new Map([
  [
    'qa',
    {
      login: '',
      password: '',
    },
  ],
  [
    'prod',
    {
      login: 'test',
      password: 'test',
    },
  ],
]);

export const baseUrls = {
  qa: '',
  prod: 'https://enotes.pointschool.ru/',
};
