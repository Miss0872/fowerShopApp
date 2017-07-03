import { FlowerShopAppPage } from './app.po';

describe('flower-shop-app App', () => {
  let page: FlowerShopAppPage;

  beforeEach(() => {
    page = new FlowerShopAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
