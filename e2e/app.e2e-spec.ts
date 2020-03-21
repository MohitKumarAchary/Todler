import { RodoAppPage } from './app.po';

describe('rodo-app App', function() {
  let page: RodoAppPage;

  beforeEach(() => {
    page = new RodoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
