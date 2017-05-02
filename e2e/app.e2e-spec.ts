import { PusherPage } from './app.po';

describe('pusher App', () => {
  let page: PusherPage;

  beforeEach(() => {
    page = new PusherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
