import { AthomePage } from './app.po';

describe('athome App', () => {
  let page: AthomePage;

  beforeEach(() => {
    page = new AthomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
