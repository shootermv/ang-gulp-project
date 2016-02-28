
'use strict';

var AboutPage = function() {
  this.jumbEl = element(by.css('.jumbotron'));
  this.h1El = this.jumbEl.element(by.css('h1'));
  this.navBarLink = element(by.cssContainingText('.navbar-nav li','About'));
  this.getNavBarLink = function(nm) {
      return  element(by.cssContainingText('.navbar-nav li',nm));
  }
};

module.exports = new AboutPage();