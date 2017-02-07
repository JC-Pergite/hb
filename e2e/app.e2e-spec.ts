import { HbPage } from './app.po';

describe('hb App', function() {
  let page: HbPage;

  beforeEach(() => {
    page = new HbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
