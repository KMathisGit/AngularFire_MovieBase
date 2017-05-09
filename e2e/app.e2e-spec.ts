import { AngularMovieBasePage } from './app.po';

describe('angular-movie-base App', () => {
  let page: AngularMovieBasePage;

  beforeEach(() => {
    page = new AngularMovieBasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
