import { PppIntroAppPage } from './app.po';

describe('ppp-intro-app App', () => {
  let page: PppIntroAppPage;

  beforeEach(() => {
    page = new PppIntroAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
