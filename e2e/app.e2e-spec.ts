import { FirstAppUdemyPage } from './app.po';

describe('first-app-udemy App', function() {
  let page: FirstAppUdemyPage;

  beforeEach(() => {
    page = new FirstAppUdemyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
