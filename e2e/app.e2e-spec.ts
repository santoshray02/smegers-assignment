import { SmegersAppPage } from './app.po';

describe('smegers-app App', () => {
  let page: SmegersAppPage;

  beforeEach(() => {
    page = new SmegersAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
