import { LookingPage } from './app.po';

describe('looking App', () => {
  let page: LookingPage;

  beforeEach(() => {
    page = new LookingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
