const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

// describe('My Login application', () => {
//     it('should login with valid credentials', () => {
//         LoginPage.open();

//         LoginPage.login('tomsmith', 'SuperSecretPassword!');
//         expect(SecurePage.flashAlert).toBeExisting();
//         expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!');
//     });
// });
//browser.url(`https://the-internet.herokuapp.com/${path}`)

describe('BI webpage', () => {
    it('should get all links', () => {
        // browser.url(`https://the-internet.herokuapp.com/${path}`)
        browser.url("https://www.businessinsider.com/best-interactive-cat-toys");
        browser.pause(3000);
    });
});


