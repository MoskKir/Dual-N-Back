import {
  Base
} from './layouts';

import {
  SignupPage,
  LoginPage,
  MainPage,
  InfoPage,
} from './pages';

const makeBase = (role, Page) => ({ roles: [role], Page, Layout: Base });

export default {
  '/info': makeBase('info', InfoPage),

  '/signup': makeBase('signup', SignupPage),
  '/login': makeBase('login', LoginPage),
  '/': makeBase('MainPage', MainPage),
};
