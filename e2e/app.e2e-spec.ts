import { CourseswapPage } from './app.po';

describe('courseswap App', function() {
  let page: CourseswapPage;

  beforeEach(() => {
    page = new CourseswapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
