
'use strict';

var ContactPage = function() {
  this.jumbEl = element(by.css('.jumbotron'));
   this.h1El = this.jumbEl.element(by.css('h1'));   
};

module.exports = new ContactPage();