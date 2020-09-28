const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('BI webpage', () => {
    it('should get all links', () => {
        browser.url("https://www.businessinsider.com/best-interactive-cat-toys");
        browser.pause(3000);
    });
});


