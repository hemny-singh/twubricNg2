import { NgTwubricPage } from './app.po';

describe('ng-twubric App', () => {
  let page: NgTwubricPage;

  beforeEach(() => {
    page = new NgTwubricPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
