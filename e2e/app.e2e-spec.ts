import { IntranetPage } from './app.po';

describe('intranet App', () => {
  let page: IntranetPage;

  beforeEach(() => {
    page = new IntranetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
