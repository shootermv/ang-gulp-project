describe('About View', function () {
  var page;

  beforeEach(function () {
    browser.get('/#/about');
    page = require('./about.po');
  });

  it('about page should include jumbotron with correct data', function() {
    expect(page.h1El.getText()).toContain('about');    
  });
  it('"about" link in main navbar - should have active class', function() {
    expect(page.navBarLink.getAttribute('class')).toBe('active');    
  });
  it('other links in main navbar - should NOT have active class', function() {
    expect(page.getNavBarLink('Home').getAttribute('class')).not.toBe('active');    
  });  
});
