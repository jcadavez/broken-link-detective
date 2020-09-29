const fetch = require('node-fetch');
var linkScraper = require("link-scraper");
const utils = require('../pageobjects/utils.page.js');

describe('BI webpage', () => {
    it('should get all links', function() {
        browser.url("/best-interactive-cat-toys");
        let urls = $$('.insider-pick-button.headline-bold').map(link => decodeURIComponent(link.getAttribute('href')));
        let affiliate = urls.map(url => {
            return utils.trimUrl(url);
        });
        urls = new Set(urls);
        affiliate = new Set(affiliate);
        let statusMap = new Map();
        browser.cdp('Network', 'enable');
        browser.on('Network.responseReceived', params => {
            const url = utils.trimUrl(params.response.url);
            if(affiliate.has(url)){
                statusMap.set(url, params.response.status);
            }
        });
        urls.forEach(url => {
            console.log("===================================");
            console.log(`Navigating to ${url}...`);
            browser.url(url);
            try {
                const affiliateUrl = utils.trimUrl(url);
                browser.waitUntil(() => statusMap.has(affiliateUrl), {
                    timeout: 3000,
                    timeoutMsg: `After 3s, cannot find network response for: ${url}`
                });
                console.log(`Status is : ${statusMap.get(affiliateUrl)}`);
            } catch(error){
                console.log(`Error : ${error}`);
            } finally{
                browser.back();
            }
        });
    });
});


