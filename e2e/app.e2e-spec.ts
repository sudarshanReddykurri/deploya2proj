import { Deploya2projPage } from './app.po';

describe('deploya2proj App', function() {
  let page: Deploya2projPage;

  beforeEach(() => {
    page = new Deploya2projPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
